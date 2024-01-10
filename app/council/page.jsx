"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Council = () => {

  const [people, setPeople] = useState(null);
  const [allPeople, setAllPeople] = useState(null)

  useEffect(() => {
    
    const fetchCouncil = async () => {

      const response = await fetch('/api/council');
      const data = await response.json();
      setPeople(data);
      setAllPeople(data);
    }
  
    if(people == null){
      fetchCouncil();
    }
    
  }, [])

  const handleTagClick = (post) => {
    const regex = new RegExp(post, "i"); // 'i' flag for case-insensitive search
    const filteredResult = allPeople?.filter(
      (item) =>
        regex.test(item.Year) 
    );
    setPeople(filteredResult)
  }
  
  return (
    <div className="bg-gray-100 py-5 ">

      <div>
        <h1 className="text-6xl font-bold text-center mb-10">OUR TEAM</h1>
      </div>
      <div className="filters bg-slate-200 w-[50%] mx-auto px-9 py-2 my-3 rounded-lg">
        <ul className='flex flex-row justify-around gap-3.5 text-base'>
          <li><p onClick={() => handleTagClick("S.E")} className='cursor-pointer'>S.E.</p></li>
          <li><p onClick={() => handleTagClick("T.E")} className='cursor-pointer'>T.E.</p></li>
          <li><p onClick={() => handleTagClick("B.E")} className='cursor-pointer'>B.E.</p></li>
        </ul>
      </div>

      <ul
          role="list"
          className="mx-5 grid gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-2"
        >
          {people?.map((person) => (
            <li key={person._id} className="mx-auto">
              <div className="flex flex-col items-center gap-x-6">
                <div className="rounded-full overflow-hidden w-72 h-72">
                  <Image
                  src={person.image}
                  height={100}
                  width={300}
                />
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
