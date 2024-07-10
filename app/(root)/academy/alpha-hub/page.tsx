import CryptoDictionary from "@/components/cypto-dictionary/crypto-dictionary";
import DailyNewAlph from "@/components/daily-new-alpha/daily-new-alpha";
import HeroSection from "@/components/hero-section/hero-section";
import TopCryptoCreators from "@/components/top-cypto-creators/top-cypto-creators";
import React from "react";
import user1 from "/public/images/user1.png";

import grid from "/public/images/grid-trending.png";
import user2 from "/public/images/user2.jpg";
import user3 from "/public/images/user3.jpg";
import base from "/public/images/base.webp";
import eth from "/public/images/eth.png";

import optimism from "/public/images/optimism.png";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import subcard1 from "/public/images/subcard1.png";
import subcard2 from "/public/images/subcard2.png";
import subcard3 from "/public/images/subcard3.png";
import subcard4 from "/public/images/subcard4.png";
import subcard5 from "/public/images/subcard5.png";
import subcard6 from "/public/images/subcard6.png";
import subcard7 from "/public/images/subcard7.png";
import subcard8 from "/public/images/subcard8.png";
import coin from "/public/images/coin.svg";
import polygon from "/public/images/polygon.png";
import { BsViewList } from "react-icons/bs";

const page = () => {
  return (
    <>
      <HeroSection />
      <DailyNewAlph />

      <div className="relative w-full mt-14">
        <div className="max-w-7xl px-14 m-auto pb-10 ">
          <span className="text-2xl">Popular Narratives</span>

          <div className="grid grid-cols-3 gap-4 mt-8 bg-zinc-900/50 border rounded-2xl overflow-hidden">
            <div className="py-8 px-10 border-r bg-zinc-900/60 cursor-pointer hover:bg-zinc-800">
              <div className="overflow-hidden">
                <span className="text-2xl block font-semibold">
                  Exploring Farcaster
                </span>

                <span className="text-ellipsis text-sm text-zinc-500 mt-3 block">
                  Farcaster is a decentralized social network built on OP,
                  enabling users to own their identity and data. Users can share
                  updates, follow others, engage in conversations
                </span>

                <div className="flex flex-row items-center space-x-4 mt-5">
                  <div>
                    <span className="text-sm  bg-zinc-800/50 rounded-full px-4 py-[6px] border border-zinc-700/50  ">
                      4 Quests
                    </span>
                  </div>

                  <div className="flex flex-row relative items-center">
                    <Image
                      alt="user1"
                      src={user1}
                      style={{
                        width: "40px",
                        height: "40px",
                      }}
                      className="object-cover hover:z-10 rounded-full border-2 border-white "
                    />

                    <Image
                      alt="user2"
                      src={user2}
                      style={{
                        width: "40px",
                        height: "40px",
                      }}
                      className="object-cover ml-[-16px] hover:z-10 rounded-full border-2 border-white "
                    />

                    <Image
                      alt="user3"
                      src={user3}
                      style={{
                        width: "40px",
                        height: "40px",
                      }}
                      className="object-cover hover:z-10 ml-[-16px] rounded-full border-2 border-white "
                    />

                    <div>
                      <span className="px-3  text-sm ml-[-16px] py-1 border border-zinc-500 rounded-full bg-zinc-800  text-zinc-400 text-center flex justify-center items-center">
                        1.4K
                      </span>
                    </div>
                  </div>
                </div>

                <hr className="my-4 border-dashed " />

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
                  <span className="text-sm inline-block ml-2">230 XPs</span>
                </div>

                <Button
                  variant="outline"
                  className="bg-indigo-500  w-full mt-5 text-white hover:bg-none focus:bg-none"
                >
                  Start here
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
            <div className="col-span-2 ">
              <div className="px-14 py-10">
                <Carousel>
                  <CarouselContent>
                    <CarouselItem className="basis-1/2">
                      <div className="border rounded-xl p-4">
                        <div className="relative bg-green-600 p-4 h-[150px] rounded-lg overflow-hidden">
                          <div className="">
                            <Image
                              alt="image"
                              src={grid}
                              style={{
                                width: "100%",
                                height: "100%",
                              }}
                              className="object-cover"
                            />
                          </div>
                          <div className="absolute z-10 bottom-0 w-[230px] ml-[14px] mb-[24px] h-[92px]">
                            <Image
                              alt="image"
                              src={subcard1}
                              style={{
                                width: "100%",
                                height: "100%",
                              }}
                              className="object-cover"
                            />
                          </div>
                        </div>

                        <div className="flex flex-col">
                          <div className="flex flex-row mt-2 space-x-2 items-center">
                            <Image
                              alt="user1"
                              src={base}
                              style={{
                                width: "20px",
                                height: "20px",
                              }}
                              className="object-cover  rounded-full "
                            />

                            <span className="text-sm">Base</span>
                          </div>
                          <span className="mt-2">$DEGEN Meets Orbit</span>
                          <hr className="my-3" />
                          <div className="flex flex-row space-x-2">
                            <div className="border flex flex-row items-center border-zinc-700  rounded-full overflow-hidden bg-zinc-800 px-3 py-1">
                              <BsViewList size={15} className="text-red-500" />
                              <span className="text-sm inline-block ml-2">
                                4 Tasks
                              </span>
                            </div>
                            <div className="border border-zinc-700 rounded-full overflow-hidden bg-zinc-800 px-3 py-1">
                              <Image
                                alt="image"
                                src={coin}
                                style={{
                                  width: "15px",
                                  height: "15px",
                                }}
                                className="object-cover inline-block"
                              />
                              <span className="text-sm inline-block ml-2">
                                230 XPs
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/2">
                      <div className="border rounded-xl p-4">
                        <div className="relative bg-blue-600 p-4 h-[150px] rounded-lg overflow-hidden">
                          <div className="">
                            <Image
                              alt="image"
                              src={grid}
                              style={{
                                width: "100%",
                                height: "100%",
                              }}
                              className="object-cover"
                            />
                          </div>
                          <div className="absolute z-10 bottom-0 w-[230px] ml-[14px] mb-[24px] h-[92px]">
                            <Image
                              alt="image"
                              src={subcard2}
                              style={{
                                width: "100%",
                                height: "100%",
                              }}
                              className="object-cover"
                            />
                          </div>
                        </div>

                        <div className="flex flex-col">
                          <div className="flex flex-row mt-2 space-x-2 items-center">
                            <Image
                              alt="user1"
                              src={optimism}
                              style={{
                                width: "20px",
                                height: "20px",
                              }}
                              className="object-cover  rounded-full "
                            />

                            <span className="text-sm">OP Mainnet</span>
                          </div>
                          <span className="mt-2">
                            Introduction to Farcaster
                          </span>
                          <hr className="my-3" />
                          <div className="flex flex-row space-x-2">
                            <div className="border flex flex-row items-center border-zinc-700  rounded-full overflow-hidden bg-zinc-800 px-3 py-1">
                              <BsViewList size={15} className="text-red-500" />
                              <span className="text-sm inline-block ml-2">
                                4 Tasks
                              </span>
                            </div>
                            <div className="border border-zinc-700 rounded-full overflow-hidden bg-zinc-800 px-3 py-1">
                              <Image
                                alt="image"
                                src={coin}
                                style={{
                                  width: "15px",
                                  height: "15px",
                                }}
                                className="object-cover inline-block"
                              />
                              <span className="text-sm inline-block ml-2">
                                40 XPs
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/2">
                      <div className="border rounded-xl p-4">
                        <div className="relative bg-orange-400/80 p-4 h-[150px] rounded-lg overflow-hidden">
                          <div className="">
                            <Image
                              alt="image"
                              src={grid}
                              style={{
                                width: "100%",
                                height: "100%",
                              }}
                              className="object-cover"
                            />
                          </div>
                          <div className="absolute z-10 bottom-0 w-[230px] ml-[14px] mb-[24px] h-[92px]">
                            <Image
                              alt="image"
                              src={subcard3}
                              style={{
                                width: "100%",
                                height: "100%",
                              }}
                              className="object-cover"
                            />
                          </div>
                        </div>

                        <div className="flex flex-col">
                          <div className="flex flex-row mt-2 space-x-2 items-center">
                            <Image
                              alt="user1"
                              src={base}
                              style={{
                                width: "20px",
                                height: "20px",
                              }}
                              className="object-cover  rounded-full "
                            />

                            <span className="text-sm">Base</span>
                          </div>
                          <span className="mt-2">
                            Follow People on Warpcast
                          </span>
                          <hr className="my-3" />
                          <div className="flex flex-row space-x-2">
                            <div className="border flex flex-row items-center border-zinc-700  rounded-full overflow-hidden bg-zinc-800 px-3 py-1">
                              <BsViewList size={15} className="text-red-500" />
                              <span className="text-sm inline-block ml-2">
                                5 Tasks
                              </span>
                            </div>
                            <div className="border border-zinc-700 rounded-full overflow-hidden bg-zinc-800 px-3 py-1">
                              <Image
                                alt="image"
                                src={coin}
                                style={{
                                  width: "15px",
                                  height: "15px",
                                }}
                                className="object-cover inline-block"
                              />
                              <span className="text-sm inline-block ml-2">
                                50 XPs
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/2">
                      <div className="border rounded-xl p-4">
                        <div className="relative bg-fuchsia-600 p-4 h-[150px] rounded-lg overflow-hidden">
                          <div className="">
                            <Image
                              alt="image"
                              src={grid}
                              style={{
                                width: "100%",
                                height: "100%",
                              }}
                              className="object-cover"
                            />
                          </div>
                          <div className="absolute z-10 bottom-0 w-[230px] ml-[14px] mb-[24px] h-[92px]">
                            <Image
                              alt="image"
                              src={subcard4}
                              style={{
                                width: "100%",
                                height: "100%",
                              }}
                              className="object-cover"
                            />
                          </div>
                        </div>

                        <div className="flex flex-col">
                          <div className="flex flex-row mt-2 space-x-2 items-center">
                            <Image
                              alt="user1"
                              src={eth}
                              style={{
                                width: "20px",
                                height: "20px",
                              }}
                              className="object-cover  rounded-full "
                            />

                            <span className="text-sm">Ethereum</span>
                          </div>
                          <span className="mt-2">Explore Farcaster Dapps</span>
                          <hr className="my-3" />
                          <div className="flex flex-row space-x-2">
                            <div className="border flex flex-row items-center border-zinc-700  rounded-full overflow-hidden bg-zinc-800 px-3 py-1">
                              <BsViewList size={15} className="text-red-500" />
                              <span className="text-sm inline-block ml-2">
                                4 Tasks
                              </span>
                            </div>
                            <div className="border border-zinc-700 rounded-full overflow-hidden bg-zinc-800 px-3 py-1">
                              <Image
                                alt="image"
                                src={coin}
                                style={{
                                  width: "15px",
                                  height: "15px",
                                }}
                                className="object-cover inline-block"
                              />
                              <span className="text-sm inline-block ml-2">
                                70 XPs
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-8 bg-zinc-900/50 border rounded-2xl overflow-hidden">
            <div className="py-8 px-10 border-r bg-zinc-900/60 cursor-pointer hover:bg-zinc-800">
              <div className="overflow-hidden">
                <span className="text-2xl block font-semibold">
                  Exploring Lens Protocol
                </span>

                <span className="text-ellipsis text-sm text-zinc-500 mt-3 block">
                  Lens Protocol is a decentralized social graph that empowers
                  developers to create social media applications on the
                  blockchain. It ensures data ownership, privacy, and
                  interoperability
                </span>

                <div className="flex flex-row items-center space-x-4 mt-5">
                  <div>
                    <span className="text-sm  bg-zinc-800/50 rounded-full px-4 py-[6px] border border-zinc-700/50  ">
                      3 Quests
                    </span>
                  </div>

                  <div className="flex flex-row relative items-center">
                    <Image
                      alt="user1"
                      src={user1}
                      style={{
                        width: "40px",
                        height: "40px",
                      }}
                      className="object-cover hover:z-10 rounded-full border-2 border-white "
                    />

                    <Image
                      alt="user2"
                      src={user2}
                      style={{
                        width: "40px",
                        height: "40px",
                      }}
                      className="object-cover ml-[-16px] hover:z-10 rounded-full border-2 border-white "
                    />

                    <Image
                      alt="user3"
                      src={user3}
                      style={{
                        width: "40px",
                        height: "40px",
                      }}
                      className="object-cover hover:z-10 ml-[-16px] rounded-full border-2 border-white "
                    />

                    <div>
                      <span className="px-3  text-sm ml-[-16px] py-1 border border-zinc-500 rounded-full bg-zinc-800  text-zinc-400 text-center flex justify-center items-center">
                        766
                      </span>
                    </div>
                  </div>
                </div>

                <hr className="my-4 border-dashed " />

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
                  <span className="text-sm inline-block ml-2">70 XPs</span>
                </div>

                <Button
                  variant="outline"
                  className="bg-indigo-500  w-full mt-5 text-white hover:bg-none focus:bg-none"
                >
                  Start here
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
            <div className="col-span-2 ">
              <div className="px-14 py-10">
                <Carousel>
                  <CarouselContent>
                    <CarouselItem className="basis-1/2">
                      <div className="border rounded-xl p-4">
                        <div className="relative bg-green-600 p-4 h-[150px] rounded-lg overflow-hidden">
                          <div className="">
                            <Image
                              alt="image"
                              src={grid}
                              style={{
                                width: "100%",
                                height: "100%",
                              }}
                              className="object-cover"
                            />
                          </div>
                          <div className="absolute z-10 bottom-0 w-[230px] ml-[14px] mb-[24px] h-[92px]">
                            <Image
                              alt="image"
                              src={subcard5}
                              style={{
                                width: "100%",
                                height: "100%",
                              }}
                              className="object-fill"
                            />
                          </div>
                        </div>

                        <div className="flex flex-col">
                          <div className="flex flex-row mt-2 space-x-2 items-center">
                            <Image
                              alt="user1"
                              src={eth}
                              style={{
                                width: "20px",
                                height: "20px",
                              }}
                              className="object-cover  rounded-full "
                            />

                            <span className="text-sm">Ethereum</span>
                          </div>
                          <span className="mt-2">
                            Introduction to Lens Protocol
                          </span>
                          <hr className="my-3" />
                          <div className="flex flex-row space-x-2">
                            <div className="border flex flex-row items-center border-zinc-700  rounded-full overflow-hidden bg-zinc-800 px-3 py-1">
                              <BsViewList size={15} className="text-red-500" />
                              <span className="text-sm inline-block ml-2">
                                3 Tasks
                              </span>
                            </div>
                            <div className="border border-zinc-700 rounded-full overflow-hidden bg-zinc-800 px-3 py-1">
                              <Image
                                alt="image"
                                src={coin}
                                style={{
                                  width: "15px",
                                  height: "15px",
                                }}
                                className="object-cover inline-block"
                              />
                              <span className="text-sm inline-block ml-2">
                                30 XPs
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/2">
                      <div className="border rounded-xl p-4">
                        <div className="relative bg-blue-600 p-4 h-[150px] rounded-lg overflow-hidden">
                          <div className="">
                            <Image
                              alt="image"
                              src={grid}
                              style={{
                                width: "100%",
                                height: "100%",
                              }}
                              className="object-cover"
                            />
                          </div>
                          <div className="absolute z-10 bottom-0 w-[230px] ml-[14px] mb-[24px] h-[92px]">
                            <Image
                              alt="image"
                              src={subcard6}
                              style={{
                                width: "100%",
                                height: "100%",
                              }}
                              className="object-fill"
                            />
                          </div>
                        </div>

                        <div className="flex flex-col">
                          <div className="flex flex-row mt-2 space-x-2 items-center">
                            <Image
                              alt="user1"
                              src={polygon}
                              style={{
                                width: "20px",
                                height: "20px",
                              }}
                              className="object-cover  rounded-full "
                            />

                            <span className="text-sm">Polygon Mainnet</span>
                          </div>
                          <span className="mt-2">
                            Exploring Dapps - Lensfrens
                          </span>
                          <hr className="my-3" />
                          <div className="flex flex-row space-x-2">
                            <div className="border flex flex-row items-center border-zinc-700  rounded-full overflow-hidden bg-zinc-800 px-3 py-1">
                              <BsViewList size={15} className="text-red-500" />
                              <span className="text-sm inline-block ml-2">
                                2 Tasks
                              </span>
                            </div>
                            <div className="border border-zinc-700 rounded-full overflow-hidden bg-zinc-800 px-3 py-1">
                              <Image
                                alt="image"
                                src={coin}
                                style={{
                                  width: "15px",
                                  height: "15px",
                                }}
                                className="object-cover inline-block"
                              />
                              <span className="text-sm inline-block ml-2">
                                20 XPs
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/2">
                      <div className="border rounded-xl p-4">
                        <div className="relative bg-orange-400/80 p-4 h-[150px] rounded-lg overflow-hidden">
                          <div className="">
                            <Image
                              alt="image"
                              src={grid}
                              style={{
                                width: "100%",
                                height: "100%",
                              }}
                              className="object-cover"
                            />
                          </div>
                          <div className="absolute z-10 bottom-0 w-[230px] ml-[14px] mb-[24px] h-[92px]">
                            <Image
                              alt="image"
                              src={subcard7}
                              style={{
                                width: "100%",
                                height: "100%",
                              }}
                              className="object-cover"
                            />
                          </div>
                        </div>

                        <div className="flex flex-col">
                          <div className="flex flex-row mt-2 space-x-2 items-center">
                            <Image
                              alt="user1"
                              src={polygon}
                              style={{
                                width: "20px",
                                height: "20px",
                              }}
                              className="object-cover  rounded-full "
                            />

                            <span className="text-sm">Polygon Mainnet</span>
                          </div>
                          <span className="mt-2">
                            Exploring Dapps - Lenstube
                          </span>
                          <hr className="my-3" />
                          <div className="flex flex-row space-x-2">
                            <div className="border flex flex-row items-center border-zinc-700  rounded-full overflow-hidden bg-zinc-800 px-3 py-1">
                              <BsViewList size={15} className="text-red-500" />
                              <span className="text-sm inline-block ml-2">
                                5 Tasks
                              </span>
                            </div>
                            <div className="border border-zinc-700 rounded-full overflow-hidden bg-zinc-800 px-3 py-1">
                              <Image
                                alt="image"
                                src={coin}
                                style={{
                                  width: "15px",
                                  height: "15px",
                                }}
                                className="object-cover inline-block"
                              />
                              <span className="text-sm inline-block ml-2">
                                50 XPs
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-8 bg-zinc-900/50 border rounded-2xl overflow-hidden">
            <div className="py-8 px-10 border-r bg-zinc-900/60 cursor-pointer hover:bg-zinc-800">
              <div className="overflow-hidden">
                <span className="text-2xl block font-semibold">
                  Exploring GRASS
                </span>

                <span className="text-ellipsis text-sm text-zinc-500 mt-3 block">
                  Grass is a network of over 2 million people who are rewarded
                  for helping AI developers access the internet. Its goal is to
                  prevent the concentration of AI by allowing ordinary people to
                  play a part and share in the benefits of its growth
                </span>

                <div className="flex flex-row items-center space-x-4 mt-5">
                  <div>
                    <span className="text-sm  bg-zinc-800/50 rounded-full px-4 py-[6px] border border-zinc-700/50  ">
                      1 Quests
                    </span>
                  </div>

                  <div className="flex flex-row relative items-center">
                    <Image
                      alt="user1"
                      src={user1}
                      style={{
                        width: "40px",
                        height: "40px",
                      }}
                      className="object-cover hover:z-10 rounded-full border-2 border-white "
                    />

                    <Image
                      alt="user2"
                      src={user2}
                      style={{
                        width: "40px",
                        height: "40px",
                      }}
                      className="object-cover ml-[-16px] hover:z-10 rounded-full border-2 border-white "
                    />

                    <Image
                      alt="user3"
                      src={user3}
                      style={{
                        width: "40px",
                        height: "40px",
                      }}
                      className="object-cover hover:z-10 ml-[-16px] rounded-full border-2 border-white "
                    />

                    <div>
                      <span className="px-3  text-sm ml-[-16px] py-1 border border-zinc-500 rounded-full bg-zinc-800  text-zinc-400 text-center flex justify-center items-center">
                        1.5k
                      </span>
                    </div>
                  </div>
                </div>

                <hr className="my-4 border-dashed " />

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
                  <span className="text-sm inline-block ml-2">40 XPs</span>
                </div>

                <Button
                  variant="outline"
                  className="bg-indigo-500  w-full mt-5 text-white hover:bg-none focus:bg-none"
                >
                  Start here
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
            <div className="col-span-2 ">
              <div className="px-14 py-10">
                <Carousel>
                  <CarouselContent>
                    <CarouselItem className="basis-1/2">
                      <div className="border rounded-xl p-4">
                        <div className="relative bg-green-600 p-4 h-[150px] rounded-lg overflow-hidden">
                          <div className="">
                            <Image
                              alt="image"
                              src={grid}
                              style={{
                                width: "100%",
                                height: "100%",
                              }}
                              className="object-cover"
                            />
                          </div>
                          <div className="absolute z-10 bottom-0 w-[230px] ml-[14px] mb-[24px] h-[92px]">
                            <Image
                              alt="image"
                              src={subcard8}
                              style={{
                                width: "100%",
                                height: "100%",
                              }}
                              className="object-fill"
                            />
                          </div>
                        </div>

                        <div className="flex flex-col">
                          <div className="flex flex-row mt-2 space-x-2 items-center">
                            <Image
                              alt="user1"
                              src={eth}
                              style={{
                                width: "20px",
                                height: "20px",
                              }}
                              className="object-cover  rounded-full "
                            />

                            <span className="text-sm">Ethereum</span>
                          </div>
                          <span className="mt-2">
                            Introduction to Lens Protocol
                          </span>
                          <hr className="my-3" />
                          <div className="flex flex-row space-x-2">
                            <div className="border flex flex-row items-center border-zinc-700  rounded-full overflow-hidden bg-zinc-800 px-3 py-1">
                              <BsViewList size={15} className="text-red-500" />
                              <span className="text-sm inline-block ml-2">
                                2 Tasks
                              </span>
                            </div>
                            <div className="border border-zinc-700 rounded-full overflow-hidden bg-zinc-800 px-3 py-1">
                              <Image
                                alt="image"
                                src={coin}
                                style={{
                                  width: "15px",
                                  height: "15px",
                                }}
                                className="object-cover inline-block"
                              />
                              <span className="text-sm inline-block ml-2">
                                40 XPs
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <Button variant="outline" className="w-[200px] py-5 bg-zinc-800/60">See More</Button>
          </div>
        </div>
      </div>

      <TopCryptoCreators />
      <CryptoDictionary />
    </>
  );
};

export default page;
