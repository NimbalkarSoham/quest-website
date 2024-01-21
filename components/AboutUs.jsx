import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="aboutUs pl-36 flex flex-col sm:flex-row bg-gray-100 w-2/3 sm:ml-48 mt-10">
      <div className="imageDiv p-6 mr-8 flex item-center">
        <Image src="/images/about.png" height={300} width={400} />
      </div>
      <div className="desc py-14 w-3/4 flex flex-col">
        <h1 className="text-3xl font-bold mb-5">
          Designed and built by an astonishing creative team.
        </h1>
        <p className="font-light ">
          Welcome to QUEST-IT, our vibrant tech family! As a student-led
          departmental-cell, we transcend beyond workshops and hackathons; we're
          a tight-knit support system. Immerse yourself in cutting-edge tech
          with us, where each member actively contributes, learns, and grows.
          We're dedicated to enriching one another's talents, fostering a
          culture of shared knowledge and embracing the journey collectively.
          Moreover, we actively support each other in honing vital soft skills,
          especially effective communication, shaping a well-rounded growth
          experience for everyone.
        </p>
        <button className=" mt-5  bg-[#0A1128] w-24 flex justify-center  text-white py-2 rounded-3xl">
          AboutUs
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
