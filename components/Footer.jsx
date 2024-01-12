"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getProviders, signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Footer = () => {
  const {data: session} = useSession();

  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      
      setProviders(response);
    }

    setUpProviders();
  },[])
  return (
    <section className="flex flex-row items-center bg-[#0A142F] py-4">
        <div className="footer text-white flex flex-col items-center gap-5 w-full">
            <div className="text-2xl">
                Quest<span className="text-cyan-300">IT</span>
            </div>
            <div className="flex flex-row">
                <a href="./" className="px-4">Home</a>
                <a href="./council" className="px-4">Council</a>
                <a href="" className="px-4">Contact us</a>
                <a href="./blogs" className="px-4">Blogs</a>
            </div>
            {session?.user ? (
              <div className="flex gap-3 md:gap-5">
                <button type="button" onClick={signOut} className="">Sign Out</button>
              </div>
            ): (
              <>
                {providers &&
                  Object.values(providers).map((provider) =>
                  (
                    <button
                      type="button"
                      key={provider.name}
                      onClick={() => signIn(provider.id)}
                      className="bg-[#212A43] px-3 py-2 rounded-lg"
                      >
                      Admin Sign In
                    </button>
                  )
                )}
              </>
              )
            }
            <div className="icons flex flex-row gap-5">
              <a href="" className="bg-[#212A43] p-2 rounded-xl"><Image src={"/1.png"} width={25} height={25}/></a>
              <a href="" className="bg-[#212A43] p-2 rounded-xl"><Image src={"/2.png"} width={25} height={25}/></a>
              <a href="" className="bg-[#212A43] p-2 rounded-xl"><Image src={"/3.png"} width={25} height={25}/></a>
            </div>
        </div>
    </section>
  );
};

export default Footer;
