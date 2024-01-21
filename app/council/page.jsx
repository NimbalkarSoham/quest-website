"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Council = () => {
  const [people, setPeople] = useState(null);
  const [allPeople, setAllPeople] = useState(null);
  const [filter, setFilter] = useState("B.E");
  useEffect(() => {
    debugger;
    const fetchCouncil = async () => {
      const response = await fetch("/api/council");
      const data = await response.json();
      setAllPeople(data);
      const regex = new RegExp("B.E", "i"); // 'i' flag for case-insensitive search
      const filteredResult = data?.filter((item) => regex.test(item.Year));
      setPeople(filteredResult);
    };

    if (people == null) {
      fetchCouncil();
    }
  }, []);

  const filterResult = (year) => {
    const regex = new RegExp(year, "i"); // 'i' flag for case-insensitive search
    const filteredResult = allPeople?.filter((item) => regex.test(item.Year));
    setPeople(filteredResult);
    setFilter(year);
  };

  return (
    <div className="bg-gray-100 py-5 ">
      <div>
        <h1 className="text-6xl font-bold text-center mb-10">OUR TEAM</h1>
      </div>
      <div className="filters bg-slate-200 w-[25%] mx-auto px-9 py-2 mb-14 rounded-lg">
        <ul className="flex flex-row justify-around gap-3.5 text-base">
          <li
            className={
              filter == "S.E"
                ? "bg-[#212A43] text-white px-4 py-1 rounded-lg"
                : "px-4 py-1 rounded-lg"
            }
          >
            <p onClick={() => filterResult("S.E")} className="cursor-pointer">
              S.E.
            </p>
          </li>
          <li
            className={
              filter == "T.E"
                ? "bg-[#212A43] text-white px-4 py-1 rounded-lg"
                : "px-4 py-1 rounded-lg"
            }
          >
            <p onClick={() => filterResult("T.E")} className="cursor-pointer">
              T.E.
            </p>
          </li>
          <li
            className={
              filter == "B.E"
                ? "bg-[#212A43] text-white px-4 py-1 rounded-lg"
                : "px-4 py-1 rounded-lg"
            }
          >
            <p onClick={() => filterResult("B.E")} className="cursor-pointer">
              B.E.
            </p>
          </li>
        </ul>
      </div>

      <ul
        role="list"
        className="mx-5 grid gap-x-8 gap-y-12 sm:grid-cols-4 sm:gap-y-16 xl:col-span-2"
      >
        {people?.map((person) => (
          <li key={person._id} className="mx-auto">
            <div className="group shadow-lg p-8 flex flex-col transform transition-transform duration-500 hover:rotate-y-180">
              <div className="overflow-hidden w-60 h-60 transformable group-hover:rotate-y-180">
                <Image src={person.image} height={100} width={300} />
              </div>
              <div className="items-center mt-4">
                <h3 className="text-base text-center font-semibold leading-7 tracking-tight text-gray-900">
                  {person.Name}
                </h3>
                <p className="text-sm text-center font-semibold leading-6 text-indigo-600">
                  {person.Post}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
   
  );
};

export default Council;
