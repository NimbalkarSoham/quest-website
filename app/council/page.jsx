"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Council = () => {
  const [people, setPeople] = useState(null);
  const [allPeople, setAllPeople] = useState(null);
  const [rank, setRank] = useState("B.E");
  const [post, setPost] = useState("Secretary");
  useEffect(() => {
    debugger;
    const fetchCouncil = async () => {
      const response = await fetch("/api/council");
      const data = await response.json();
      setAllPeople(data);
      setPeople(data);
    };

    if (people == null) {
      fetchCouncil();
    }
  }, []);

  const setupPost = (position) => {
    setPost(position);
    //setRank("B.E");
  };

  return (
    <div className="bg-gray-100 py-5 flex flex-col items-center">
      <div>
        <h1 className="text-6xl font-bold text-center mb-10">OUR TEAM</h1>
      </div>
      <div className="filters flex flex-col gap-5 items-center mx-auto px-9 py-2 mb-14 rounded-lg">
        {/* BE-SE-TE */}
        <ul className="flex w-1/3 flex-row justify-around gap-3.5 text-lg border-b-gray-400 border-b-[1px] px-8 pb-2 ">
          <li
            className={`${rank == "S.E" ? "border-b-blue-950 border-b-2" : ""}`}
          >
            <p onClick={() => setRank("S.E")} className="cursor-pointer">
              S.E.
            </p>
          </li>
          <li
            className={`${rank == "T.E" ? "border-b-blue-950 border-b-2" : ""}`}
          >
            <p onClick={() => setRank("T.E")} className="cursor-pointer">
              T.E.
            </p>
          </li>
          <li
            className={`${rank == "B.E" ? "border-b-blue-950 border-b-2" : ""}`}
          >
            <p onClick={() => setRank("B.E")} className="cursor-pointer">
              B.E.
            </p>
          </li>
        </ul>

        {/* POSTITIONS */}
        <div>
          <ul className="flex flex-row justify-around gap-16 text-lg w-fit border-b-gray-400 border-b-[1px] px-8 pb-2 ">
            <li
              className={`${
                post == "Secretary" ? "border-b-blue-950 border-b-2" : ""
              }`}
            >
              <p
                onClick={() => setupPost("Secretary")}
                className="cursor-pointer"
              >
                Secretary
              </p>
            </li>
            <li
              className={`${
                post == "Technical" ? "border-b-blue-950 border-b-2" : ""
              }`}
            >
              <p
                onClick={() => setupPost("Technical")}
                className="cursor-pointer"
              >
                Technical
              </p>
            </li>
            <li
              className={`${
                post == "Graphics" ? "border-b-blue-950 border-b-2" : ""
              }`}
            >
              <p
                onClick={() => setupPost("Graphics")}
                className="cursor-pointer"
              >
                Graphics
              </p>
            </li>
            <li
              className={`${
                post == "Public" ? "border-b-blue-950 border-b-2" : ""
              }`}
            >
              <p
                onClick={() => setupPost("Public")}
                className="cursor-pointer text-nowrap"
              >
                Public Relations
              </p>
            </li>
            <li
              className={`${
                post == "Content" ? "border-b-blue-950 border-b-2" : ""
              }`}
            >
              <p
                onClick={() => setupPost("Content")}
                className="cursor-pointer text-nowrap"
              >
                Content Writer
              </p>
            </li>
            <li
              className={`${
                post == "Media" ? "border-b-blue-950 border-b-2" : ""
              }`}
            >
              <p
                onClick={() => setupPost("Media")}
                className="cursor-pointer text-nowrap"
              >
                Social Media Manager
              </p>
            </li>
          </ul>
        </div>
      </div>

      <ul
        role="list"
        className="mx-5 grid gap-x-24 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-2"
      >
        {people
          ?.filter(
            (person) => person.Post.includes(post) && person.Year === rank
          )
          .map((person) => (
            <li className="group h-[300px] w-[300px] relative [perspective:1000px]">
              <div className="relative h-full w-full transition-all rounded-3xl duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="hover:cursor-pointer flex justify-center items-center h-full overflow-hidden w-full absolute inset-0 rounded-3xl">
                  <Image
                    className="h-full w-full object-cover rounded-3xl"
                    src={person.image}
                    alt="TEXT IMAGE"
                    height={100}
                    width={300}
                  />
                </div>

                <div className="absolute rounded-3xl inset-0 items-center bg-black/80 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex flex-col items-center justify-center mx-10 mt-20">
                    <h3 className="text-white text-2xl text-bold">
                      {person.Name}
                    </h3>
                    <p className="text-sm text-center font-semibold leading-6 text-white">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Illo obcaecati aliquam praesentium, eaque quae soluta.
                    </p>
                    <div className="icons flex flex-row gap-5 mt-5">
                      <a
                        href={person.LinkedIn || ""}
                        className="bg-[#212A43] p-2 rounded-xl"
                      >
                        <Image src={"/1.png"} width={25} height={25} />
                      </a>
                      <a
                        href={person.LinkedIn || ""}
                        className="bg-[#212A43] p-2 rounded-xl"
                      >
                        <Image src={"/2.png"} width={25} height={25} />
                      </a>
                      <a
                        href={person.LinkedIn || ""}
                        className="bg-[#212A43] p-2 rounded-xl"
                      >
                        <Image src={"/3.png"} width={25} height={25} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>

      <ul className="ml-20 flex flex-col justify-center"></ul>
    </div>
  );
};

export default Council;
