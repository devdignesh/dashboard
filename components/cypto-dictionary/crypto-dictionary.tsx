import Image from "next/image";
import React from "react";
import { IoBookOutline } from "react-icons/io5";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AcademyTabs from "./academy-tabs";

const CryptoDictionary = () => {
  return (
    <div className="border-t">
      <div className="max-w-7xl px-14 m-auto pt-10">
        <div className="w-full flex flex-col justify-center items-center">
          <span className="text-2xl block">Crypto Dictionary</span>
          <span className="text-base text-gray-400/70 pt-2">
            Your one-stop to catch up on all crypto terms
          </span>
        </div>
        <div className="w-full mb-14">
          <div className="relative ">
            <div className="mt-5 h-[450px] rounded-2xl border overflow-hidden ">
              <Image
                src={"/images/crypto.png"}
                width={100}
                height={100}
                className="object-cover "
                alt="crypto dictionary "
                layout="responsive"
              />

              <Image
                src={"/images/crypto.png"}
                width={100}
                height={100}
                className="bg-cover inset-x-0 bottom-0"
                alt="crypto dictionary "
                layout="responsive"
              />
            </div>

            <div className="absolute p-6 inset-x-0 bottom-0 flex justify-between w-full">
              <div>
                <span className="text-2xl block">Web3 + Degen Glossary</span>
                <span>Your own crypto dictionary</span>
              </div>
              <div className="bg-black/30 p-5 rounded-full flex justify-center items-center ">
                <span className="">
                  <IoBookOutline size={20} />
                </span>
              </div>
            </div>
          </div>

          
          <AcademyTabs />
        </div>
      </div>
    </div>
  );
};

export default CryptoDictionary;
