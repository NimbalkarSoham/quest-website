"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getProviders, signIn, signOut, useSession } from "next-auth/react";

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
            {session?.user ? (
              <div className="flex gap-3 md:gap-5">
                <button type="button" onClick={signOut} className="outline_btn">Sign Out</button>
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
                      className="black_btn"
                      >
                      Sign In
                    </button>
                  )
                )}
              </>
              )
            }
        </div>
    </>
  );
};

export default Footer;
