import Image from "next/image";
import Link from "next/link";
import React from "react";

const Work = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center mt-14 py-8 bg-slate-300">
      <div className="heading text-5xl font-bold mb-7">Explore Our Events</div>
      <div className="flex justify-center px-52">
        At QUEST-IT, we redefine workshops as dynamic experiences that blend
        innovation, creativity, and knowledge. Our approach goes beyond the
        ordinary, incorporating interactive elements that make learning both
        engaging and enjoyable. From intricate details on problem statement
        selection to mastering technical skills, we infuse creativity into every
        aspect. Fun isn't just a byproduct; it's embedded in the design, with
        quizzes and treats maintaining high enthusiasm. We believe in making
        knowledge accessible, and our workshops are a testament to this
        commitment, providing a perfect blend of hands-on learning, practical
        insights, and transformative experiences.
      </div>
      <div className="workPhotos flex flex-col sm:flex-row items-center justify-center">
        <Image
          className="m-6 "
          src="/Images/Work1.png"
          height={250}
          width={250}
        />
        <Image
          className="m-6"
          src="/Images/Work2.png"
          height={250}
          width={250}
        />
        <Image
          className="m-6"
          src="/Images/Work3.png"
          height={250}
          width={250}
        />
      </div>
      <a
        href="/events"
        className="bg-[#0A1128] w-[180px] px-4 text-white py-2 rounded-3xl flex justify-center items-center gap-x-4 group hover:shadow-2xl duration-300" 
      >
        <span className="text-lg">View More</span>
        <svg
        className="w-4 group-hover:rotate-45 group-hover:translate-x-2 duration-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </a>
    </div>
  );
};

export default Work;
