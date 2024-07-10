"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

const HeroSection = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="">
        <div className="">
          <Image
            src={"/images/intract-academy-background.png"}
            alt="header-bg"
            height={"300"}
            width={"100"}
            className="w-full h-full -z-10"
            layout="responsive"
          />
        </div>

        <div className="absolute top-0 w-full h-full">
          <div className="flex flex-col justify-center items-center h-full   ">
            <div className="relative">
              <Image
                src={"/images/academy-animated-logo.gif"}
                alt="animated_logo"
                height={100}
                width={250}
                className="mix-blend-screen"
              />

              {pathname === `/academy/alpha-hub` ? (
                <div className="absolute right-[-50px] mt-[-50px] z-10">
                  <Image
                    src={"/images/for-degens.svg"}
                    alt="animated_logo"
                    height={70}
                    width={100}
                    className="mix-blend-screen"
                  />
                </div>
              ) : (
                ""
              )}
            </div>

            {pathname === `/academy/alpha-hub` ? (
              ''
            ) : (
              <div className="">
                <div className="flex flex-col justify-center items-center mt-4 ">
                  <p className="text-lg text-zinc-500">
                    <span className="text-white">Intract users</span> have
                    together made more than{" "}
                    <span className="text-white"> $100 million</span> in web3.
                  </p>
                  <p className="text-lg text-zinc-500">
                    Join them and{" "}
                    <span className="text-white">
                      learn how to earn crypto!
                    </span>
                  </p>

                  <Button
                    variant="outline"
                    className="bg-indigo-600/75  w-52 mt-5 text-white hover:bg-none focus:bg-none"
                  >
                    Get Started
                    <Image
                      src={"/images/arrow-right-1c96f4ae.svg"}
                      className="ml-2"
                      alt="arrow"
                      height={15}
                      width={15}
                    />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
