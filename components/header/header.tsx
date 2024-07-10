import Image from "next/image";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { IoReorderThree, IoSearch } from "react-icons/io5";
import HeaderItem from "./header-item";

const Header = () => {
  return (
    <header className="border-b  sticky top-0 z-50 backdrop-blur-md bg-black/60">
      <div className="max-w-7xl m-auto h-16 px-4">
        <div className="w-full h-full flex justify-between items-center">
          <div className="flex flex-row space-x-10 h-full items-center">
            <div className="">
              <Image
                src="/images/intract_text.svg"
                height={100}
                width={100}
                alt="Picture of the logo"
              />
            </div>
            <div className="hidden lg:block h-full">
              <div className="flex flex-row h-full  items-center">
                <HeaderItem href="/#" text="compass"/> 
                <HeaderItem href="/#" text="explore"/> 
                <HeaderItem href="/academy" active isNew text="academy"/>
                
                <HeaderItem href="/#" text="NFTs"/>
                <HeaderItem href="/#" text="for Project"/>
              </div>
            </div>
          </div>
          <div className="flex flex-row float-right space-x-3 items-center">
            <div className="hidden lg:block w-full">
              <div className="flex flex-row w-full items-center bg-zinc-600/30 rounded-full px-3 border border-zinc-800">
                <IoSearch size={20} className="text-zinc-500" />
                <input
                  type="text"
                  name="search"
                  id="search"
                  autoComplete="off"
                  placeholder="Seacrch for ecosystems, trending quests etc,."
                  className="rounded-full py-2 active:border-none w-[350px] focus-visible:outline-none focus-visible:border-none border-0 pl-2 bg-transparent placeholder:text-sm placeholder:text-zinc-500"
                />
              </div>
            </div>

            {/* <Input
              className="flex rounded-full h-10 bg-zinc-600/40 placeholder:text-sm placeholder:pl-3"
              placeholder="Seacrch for ecosystems, trending quests etc,."
            /> */}
            <div className="flex flex-row border cursor-pointer rounded-full p-3 border-[#fa8922]">
              <Image
                src="/images/broadcast_or-04af786c.svg"
                alt="broadcast"
                className=""
                height={22}
                width={22}
              />
            </div>

            <Button variant="default" className="flex flex-row w-32 h-8">
              Sign in
            </Button>

            <div className="block lg:hidden ">
              <IoReorderThree size={32} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
