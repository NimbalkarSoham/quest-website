import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="aboutUs pt-20 p-28 flex justify-center pb-0 space-x-9 bg-gray-100  ">
      <div className="imageDiv p-6 flex item-center">
        <Image src="/images/about.png" height={400} width={400} />
      </div>
      <div className="desc w-1/2 flex flex-col   p-6">
        <h1 className="text-3xl font-bold mb-5">
          Designed and built by an astonishing creative team.
        </h1>
        <p className="font-light">
          Et eleifend consectetur tellus consectetur nibh non urna lobortis.
          Quis sapien enim posuere mollis risus. Nec dictumst ullamcorper et
          leo. Varius praesent tinc. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Rem aperiam possimus amet! Officia adipisci, quas
          sequi aperiam quibusdam eius totam quis aliquam fuga non ut maxime quo
          necessitatibus molestiae obcaecati? Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Voluptate necessitatibus suscipit
          tenetur corporis accusamus dolores dolorem quaerat. Assumenda
          quibusdam saepe laborum, vero ea magnam ipsa provident animi cum.
          Numquam, dolores! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore sequi doloremque dignissimos magnam est perferendis cupiditate qui laborum magni eaque vitae, sapiente placeat eveniet distinctio assumenda voluptates eligendi aliquid autem.
        </p>
        <button className=" mt-2  bg-[#0A1128] w-24 flex justify-center text-center text-white py-2 rounded-3xl">
            AboutUs
        </button>
      </div>

    </div>
  );
};

export default AboutUs;
