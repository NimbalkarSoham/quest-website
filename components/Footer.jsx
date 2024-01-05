import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
        <div className="footer h-28 text-white bg-[#090f1b] flex-col text-center">
            <div className="pt-2 cellName h-1/4">
                QuestIt
            </div>
            <div className="info py-5">
                <a href="" className="px-4">work</a>
                <a href="" className="px-4">service</a>
                <a href="" className="px-4">contactUs</a>
                <a href="" className="px-4">careers</a>
            </div>
        </div>
    </>
  );
};

export default Footer;
