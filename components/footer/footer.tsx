import React from "react";
import FooterLink from "./footer-link";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { AiFillSpotify } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="border-t">
      <div className="max-w-7xl m-auto pt-10 sm:px-0 px-4">
        <div className="mt-5 pb-10 flex sm:flex-row flex-col justify-between border-b">
          <div className="w-72">
            <span className="text-2xl block">intract.</span>
            <span className="text-sm text-gray-400/70 mt-5 block">
              We are your personal guide for exploring web3 projects & earning
              100x rewards
            </span>
          </div>
          <div className="grid grid-cols-2 mt-5 sm:mt-0  sm:gap-10 sm:grid-cols-4 gap-4  justify-between">
            <div className="w-full">
              <span className="text-base block uppercase">intract</span>
              <div className="mt-5">
                <FooterLink>Explore Quests</FooterLink>
                <FooterLink>Comunities</FooterLink>
                <FooterLink>Alpha Hub</FooterLink>
              </div>
            </div>
            <div className="w-full">
              <span className="text-base block uppercase">earn</span>
              <div className="mt-5">
                <FooterLink>Refer & Earn</FooterLink>
                <FooterLink>Leaderboard</FooterLink>
                <FooterLink>Achievements</FooterLink>
              </div>
            </div>

            <div className="w-full">
              <span className="text-base block uppercase">about</span>
              <div className="mt-5">
                <FooterLink>Product Roadmap</FooterLink>
                <FooterLink>Affiliate Program</FooterLink>
                <FooterLink>Sign up Program</FooterLink>
                <FooterLink>Growth Community</FooterLink>
                <FooterLink>Blogs</FooterLink>
              </div>
            </div>
            <div className="w-full">
              <span className="text-base block uppercase">support</span>
              <div className="mt-5">
                <FooterLink>Help Center</FooterLink>
                <FooterLink>Create your quest</FooterLink>
                <FooterLink>Terms of Service</FooterLink>
                <FooterLink>Privacy Policy</FooterLink>
                <FooterLink>Community Guidelines</FooterLink>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 pb-10 border-b text-sm ">
          <p className="text-gray-400/70">
            <span className="text-white">Disclaimer:</span> Crypto Products,
            Virtual Digital Assets, and NFTs are unregulated and can be highly
            risky. There may be no regulatory recourse for any loss from such
            transactions. We advise the viewer to proceed with caution. Nothing
            in this website or any communication published by us amounts to, is
            intended to be, or should be construed as investment or purchase
            advice of any kind or financial advice or promotion under any
            applicable laws. Any decision made based on the content provided on
            this website or any communication published by us shall not be
            attributable to us.
          </p>
        </div>
        <div className="flex justify-between mt-10 mb-8">
          <div className="uppercase">
            <p>
              Created by
              <span className="text-white underline cursor-pointer pl-2 hover:text-gray-400/70 transition-all ">
                intract
              </span>
            </p>
          </div>
          <div className="flex flex-row space-x-4">
            <span className="bg-gray-800/70 p-2 rounded-md text-indigo-400">
              <FaTwitter size={20} />
            </span>
            <span className="bg-gray-800/70 p-2 rounded-md text-cyan-400">
              <FaDiscord  size={20} />
            </span>
            <span className="bg-gray-800/70 p-2 rounded-md text-indigo-400">
              <BsTelegram  size={20} />
            </span>
            <span className="bg-gray-800/70 p-2 rounded-md text-lime-500">
              <AiFillSpotify size={20} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
