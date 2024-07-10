import Image from 'next/image'
import React from 'react'
import image1 from "/public/images/img1.png";

import image3 from "/public/images/img3.png";

import image4 from "/public/images/img4.png";

import image5 from "/public/images/img5.gif";

import arrow6 from "/public/images/arrow6.svg";
import arrow2 from "/public/images/arrow2.svg";

import arrow1 from "/public/images/arrow1.svg";
import arrow3 from "/public/images/arrow3.svg";
import dotBg from "/public/images/dotBg.png";
import arrow4 from "/public/images/arrow4.svg";
import arrow5 from "/public/images/arrow5.svg";
import coin from "/public/images/coin.svg";
import { FaCheck, FaSortDown } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";
import image2 from "/public/images/img2.png";
import { FaUnlockKeyhole } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { IoMdCheckmark, IoMdInformationCircleOutline } from "react-icons/io";



const MainContentFlow = () => {
  return (
    <>
    <div className="relative w-full">
        <div className="max-w-7xl px-14 m-auto mt-[-150px] pb-10">
          <div className="relative">
            <div className="flex flex-row space-x-6 w-[500px] border hover:bg-zinc-800/90 transition delay-100 cursor-pointer bg-zinc-900/80 p-5 rounded-3xl">
              <div className="rounded-2xl border p-2 border-zinc-700">
                <div className="h-[150px] w-[140px] overflow-hidden rounded-xl">
                  <Image
                    alt="image"
                    src={image1}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    className="object-cover"
                  />
                  <div className="relative top-[-45px] left-7">
                    <span className="text-sm bg-zinc-900/90 rounded-full px-3 py-2 border border-zinc-600  ">
                      6 Quests
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div>
                  <FaSortDown size={22} className="float-end" />
                  <span className="text-[22px] block">Basics of Crypto</span>
                  <span className="text-gray-400/70 text-[15px] block">
                    The safest and easiest place to start your crypto journey!
                  </span>
                  <hr className="border-dashed my-5" />
                </div>
                <div className="border border-zinc-700 w-[115px] rounded-full overflow-hidden bg-zinc-800 px-3 py-1">
                  <Image
                    alt="image"
                    src={coin}
                    style={{
                      width: "15px",
                      height: "15px",
                    }}
                    className="object-cover inline-block"
                  />
                  <span className="text-sm inline-block ml-2">1490 XPs</span>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 ">
              <div className="-z-20 mt-[-100px] ml-[-130px] flex justify-start">
                <div className="flex w-full justify-center">
                  <Image
                    alt="arrowimage1"
                    src={arrow1}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
   
          <div className="flex justify-center">
            <div className="absolute -z-10 mt-[-35px] flex justify-center">
              <div className="flex w-full justify-center">
                <Image
                  alt="arrowimage2"
                  src={arrow2}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end top-[-25px] w-full relative">
            <div className="flex flex-col justify-start">
              <div className="">
                <div className="inline-block flex-col">
                  <div className="flex justify-center">
                    <span className="bg-zinc-600/30 border flex border-zinc-700 rounded-full p-3">
                      <IoCheckmark size={23} className="text-zinc-500" />
                    </span>
                  </div>
                  <div className="flex flex-col justify-start ">
                    <div className="flex justify-start">
                      <div className="mt-5 rounded-3xl overflow-hidden border border-zinc-700 p-2 bg-black">
                        <div className="rounded-2xl h-[160px] w-[140px] overflow-hidden">
                          <Image
                            alt="image"
                            src={image2}
                            style={{
                              width: "100%",
                              height: "100%",
                            }}
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end top-[-30px] right-[-14px] relative">
                      <span className="bg-zinc-900 border flex border-zinc-700 rounded-full p-3">
                        <FaUnlockKeyhole size={17} className="text-zinc-500" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-[-20px]">
                <span className="text-lg text-zinc-300">
                  Intract Certified: Learner NFT
                </span>
                <span className="text-sm text-zinc-500">
                  Your crypto black-belt <br />
                  certificate
                </span>
                <Button
                  variant="outline"
                  className="mt-5 w-[160px] bg-zinc-900 cursor-not-allowed"
                >
                  Claim
                </Button>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="absolute left-[420px]">
              <div className=" -z-10 mt-[100px] flex justify-start">
                <div className="flex w-full justify-center">
                  <Image
                    alt="arrowimage4"
                    src={arrow4}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="flex mt-[55px] flex-row space-x-6 w-[500px]  border hover:bg-zinc-800/90 transition delay-100 cursor-pointer bg-zinc-900/80 p-5 rounded-3xl">
              <div className="rounded-2xl border p-2 border-zinc-700">
                <div className="h-[150px] w-[140px] overflow-hidden rounded-xl">
                  <Image
                    alt="image4"
                    src={image4}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    className="object-cover"
                  />
                  <div className="relative top-[-45px] left-7">
                    <span className="text-sm bg-zinc-900/90 rounded-full px-3 py-2 border border-zinc-600  ">
                      4 Quests
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div>
                  <FaSortDown size={22} className="float-end" />
                  <span className="text-[22px] block">
                    Introduction to Airdrops
                  </span>
                  <span className="text-gray-400/70 text-[15px] block">
                    Your best bet to make it big in crypto!
                  </span>
                  <hr className="border-dashed my-5" />
                </div>
                <div className="border border-zinc-700 w-[115px] rounded-full overflow-hidden bg-zinc-800 px-3 py-1">
                  <Image
                    alt="image"
                    src={coin}
                    style={{
                      width: "15px",
                      height: "15px",
                    }}
                    className="object-cover inline-block"
                  />
                  <span className="text-sm inline-block ml-2">1040 XPs</span>
                </div>
              </div>
            </div>

            <div className="flex">
              <div className="absolute -z-10 mt-[-250px] right-40 flex justify-center">
                <div className="flex w-full justify-center">
                  <Image
                    alt="arrowimage3"
                    src={arrow3}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

           
          <div className="flex justify-start mt-[100px] w-full relative">
            <div className="flex flex-col justify-start">
              <div className="">
                <div className="inline-block flex-col">
                  <div className="flex justify-center">
                    <span className="bg-zinc-600/30 border flex border-zinc-700 rounded-full p-3">
                      <IoCheckmark size={23} className="text-zinc-500" />
                    </span>
                  </div>
                  <div className="flex flex-col justify-start ">
                    <div className="flex justify-start">
                      <div className="mt-5 rounded-3xl overflow-hidden border border-zinc-700 p-2 z-10 bg-black">
                        <div className="rounded-2xl h-[160px] w-[140px] overflow-hidden">
                          <Image
                            alt="image"
                            src={image3}
                            style={{
                              width: "100%",
                              height: "100%",
                            }}
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end top-[-30px] right-[-14px] z-20 relative">
                      <span className="bg-zinc-900 border flex border-zinc-700 rounded-full p-3">
                        <FaUnlockKeyhole size={17} className="text-zinc-500" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-[-20px]">
                <span className="text-lg text-zinc-300">
                  Intract Certified: Earner NFT
                </span>
                <span className="text-sm text-zinc-500">
                  Your proof of
                  <br />
                  airdrop expertise
                </span>
                <Button
                  variant="outline"
                  className="mt-5 w-[160px] bg-zinc-900 cursor-not-allowed"
                >
                  Claim
                </Button>
              </div>
            </div>
          </div>

          <div className="relative block">
            <div className="flex flex-row justify-end mr-10 ">
              <div className="mr-12 z-20">
                <div className="flex flex-col justify-center w-[320px] mt-[100px] m-auto">
                  <div className="flex flex-col w-full border border-x-zinc-900/30 mt-[-20px] bg-zinc-900/70 p-4 rounded-xl">
                    <span className="text-base text-zinc-500/80 font-bold">
                      Reward unlocks in
                    </span>
                    <hr className="border border-dashed my-3" />
                    <div className="relative border bg-black/40 rounded-xl">
                      <div className="w-full z-0 overflow-hidden">
                        <div className="flex absolute justify-center">
                          <Image
                            alt="arrowimage4"
                            src={dotBg}
                            style={{
                              width: "100%",
                              height: "100%",
                            }}
                            className="object-cover "
                          />
                        </div>
                      </div>

                      <div className="z-10 relative">
                        <div className="grid grid-cols-4 gap-4 p-4">
                          <div className="flex flex-col justify-center items-center">
                            <span className="text-3xl text-zinc-400 font-bold ">
                              00
                            </span>
                            <span className="text-sm font-semibold text-zinc-500">
                              Days
                            </span>
                          </div>
                          <div className="flex flex-col justify-center items-center">
                            <span className="text-3xl text-zinc-400 font-bold ">
                              00
                            </span>
                            <span className="text-sm font-semibold text-zinc-500">
                              Hrs
                            </span>
                          </div>
                          <div className="flex flex-col justify-center items-center">
                            <span className="text-3xl text-zinc-400 font-bold ">
                              00
                            </span>
                            <span className="text-sm font-semibold text-zinc-500">
                              Mins
                            </span>
                          </div>
                          <div className="flex flex-col justify-center items-center">
                            <span className="text-3xl text-zinc-400 font-bold ">
                              00
                            </span>
                            <span className="text-sm font-semibold text-zinc-500">
                              Sec
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 p-3 border rounded-xl bg-zinc-900/70">
                    <div className="flex w-full justify-center rounded-xl overflow-hidden">
                      <Image
                        alt="image5"
                        src={image5}
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                        className="object-cover"
                      />
                    </div>
                    <div className="mt-2">
                      <div className="flex flex-row justify-between">
                        <span className="text-zinc-500 font-semibold">
                          Exclusive Community
                        </span>
                        <span className="text-zinc-200 font-semibold">
                          Earndrop
                        </span>
                      </div>
                      <hr className="border-dashed border-zinc-600 my-3 " />
                      <div className="flex flex-row justify-between">
                        <span className="text-zinc-500 text-sm font-semibold">
                          Complete all Essential quests
                        </span>
                        <span className="p-1 rounded-full bg-zinc-700 flex justify-center items-center">
                          <IoMdCheckmark size={10} />
                        </span>
                      </div>
                      <div className="flex flex-row justify-between mt-2">
                        <span className="text-zinc-500 text-sm font-semibold">
                          Complete at least 1 Alpha Hub quest
                        </span>
                        <span className="p-1 rounded-full bg-zinc-700 flex justify-center items-center">
                          <IoMdCheckmark size={10} />
                        </span>
                      </div>
                      <Button
                        variant="outline"
                        className="bg-zinc-700/50 text-zinc-300 border border-zinc-700 w-full mt-5 h-10   hover:bg-none focus:bg-none"
                      >
                        Claim now
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
                </div>
              </div>

              <div className="relative">
                <div className="mt-32 w-[312px]">
                  <div className="border bg-zinc-900/50 border-zinc-500/60 rounded-lg">
                    <div className="py-2 px-4 ">
                      <span className="text-zinc-500 text-sm inline font-semibold">
                        Reward info
                      </span>
                      <IoMdInformationCircleOutline
                        size={17}
                        className="inline ml-1 text-zinc-500"
                      />
                    </div>
                    <hr className="border border-zinc-800/50" />
                    <div className="py-4 px-4 ">
                      <span className="text-zinc-300 text-sm font-semibold block">
                        Free access to paid KOL (crypto earning) communities!
                      </span>
                      <span className="text-zinc-500 text-sm block mt-4">
                        Win access to exclusive earning communities of some of
                        the the greatest earners in crypto for a month, every 24
                        hours. Get access to unmatched insights, a close-knit
                        community of the best airdrop earners, and more. To win:
                        make sure you've connected your Twitter and Discord
                        accounts - and follow our criteria!
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 ">
                  <div className="-z-20 mt-[-340px] ml-[-50px] flex justify-start">
                    <div className="flex w-full justify-center">
                      <Image
                        alt="arrowimage6"
                        src={arrow6}
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-0 left-[-270px] -z-10">
              <div className="mt-[-240px] flex justify-start">
                <div className="flex w-full justify-center">
                  <Image
                    alt="arrowimage5"
                    src={arrow5}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainContentFlow
