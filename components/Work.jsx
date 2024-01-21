import Image from "next/image";
import Link from "next/link";
import React from "react";

const Work = () => {
  return (
    <div className="Main flex-row text-center mt-14">
      <div className="heading text-3xl font-bold mb-7">See Our Event</div>
      <div className="para px-52">
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
        className="bg-[#0A1128] w-24 px-4 text-white py-2 rounded-3xl"
      >
        Our event
      </a>
    </div>
  );
};

export default Work;
