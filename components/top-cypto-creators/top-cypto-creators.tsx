import Image from "next/image";
import React from "react";
import CreatorCard from "./creator-card";

const TopCryptoCreators = () => {
  return (
    <div className="border-t">
      <div className="max-w-7xl px-14 m-auto pt-10 pb-10">
        <div className="w-full flex flex-col justify-center items-center">
          <span className="text-2xl block">
            Top Crypto Creators and Projects to Follow
          </span>
          <span className="text-base text-gray-400/70 pt-2">
            Answers to your crypto doubts, straight from the experts
          </span>
        </div>

        <div className="mt-10 grid sm:grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 grid-cols-1">
            <CreatorCard image="/images/card1.png" title="How to plan your retirement with crypto?"/>
            <CreatorCard image="/images/card2.png" title="Why are there limited Bitcoin?"/>
            <CreatorCard image="/images/card3.png" title="How does Uniswap actually work?"/>
            <CreatorCard image="/images/card4.png" title="How to spot crypto projects to invest in?"/>
        </div>

        
      </div>
    </div>
  );
};

export default TopCryptoCreators;
