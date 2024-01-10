import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="aboutUs flex flex-col sm:flex-row items-center bg-gray-100 w-2/3 sm:ml-48 mt-10">
      <div className="imageDiv p-6 flex item-center">
        <Image src="/images/about.png" height={400} width={400} />
      </div>
      <div className="desc w-3/4 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-5 text-center">
          Designed and built by an astonishing creative team.
        </h1>
        <p className="font-light text-center">
          Et eleifend consectetur tellus consectetur nibh non urna lobortis.
          Quis sapien enim posuere mollis risus. Nec dictumst ullamcorper et
          leo. Varius praesent tinc. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Rem aperiam possimus amet! Officia adipisci, quas
          sequi aperiam quibusdam eius totam quis aliquam fuga non ut maxime quo
          necessitatibus molestiae obcaecati? Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Voluptate necessitatibus suscipit
          tenetur corporis accusamus dolores dolorem quaerat. Assumenda
          quibusdam saepe laborum, vero ea magnam ipsa provident animi cum.
          Numquam, dolores! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Inventore sequi doloremque dignissimos magnam est perferendis
          cupiditate qui laborum magni eaque vitae, sapiente placeat eveniet
          distinctio assumenda voluptates eligendi aliquid autem.
        </p>
        <button className=" mt-5  bg-[#0A1128] w-24 flex justify-center text-center text-white py-2 rounded-3xl">
          AboutUs
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
