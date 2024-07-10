import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import carousel1 from "/public/images/carousel1.jpg";
import carousel2 from "/public/images/carousel2.png";
import carousel3 from "/public/images/carousel3.png";

import user1 from "/public/images/user1.png";
import user2 from "/public/images/user2.jpg";
import user3 from "/public/images/user3.jpg";
import { Button } from "@/components/ui/button";

const DailyNewAlph = () => {
  return (
    <>
      <div className="relative w-full border-b border-zinc-900">
        <div className="max-w-7xl px-14 m-auto mt-[-300px] pb-10 ">
          <span className="text-2xl">Daily New Alpha for You</span>
          <div className="mx-0 mt-6">
            <Carousel>
              <CarouselContent>
                <CarouselItem>
                  <div className="grid auto-cols-max grid-flow-col border p-4 rounded-xl bg-zinc-900/40">
                    <div className="h-[350px] w-[620px] rounded-xl border overflow-hidden">
                      <div className="w-full h-full">
                        <Image
                          alt="arrowimage2"
                          src={carousel1}
                          style={{
                            width: "100%",
                            height: "100%",
                          }}
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="px-3 ml-3 overflow-hidden w-[500px]">
                      <span className="text-2xl block mt-3 font-semibold">
                        Navigating Bungee and Jumper Exchanges
                      </span>

                      <span className="text-ellipsis text-zinc-500 mt-3 block">
                        Bungee Exchange is a cross-chain swap platform
                        optimizing token exchanges across blockchains. Jumper
                        Exchange, powered by LI.FI, aggregates liquidity for
                        multi-chain bridging and swapping, simplifying asset
                        transfers.
                      </span>

                      <hr className="my-4" />

                      <div className="flex flex-row relative">
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

                        <span className="px-3 ml-[-16px] py-2 border border-zinc-500 rounded-full bg-zinc-800 text-sm text-center flex justify-center items-center">
                          490
                        </span>
                      </div>
                      <Button
                        variant="default"
                        className="bg-indigo-600 mt-6 text-white py-6 px-5 text-base "
                      >
                        Begin your journey
                      </Button>
                    </div>
                  </div>
                </CarouselItem>

                <CarouselItem>
                  <div className="grid auto-cols-max grid-flow-col border p-4 rounded-xl bg-zinc-900/40">
                    <div className="h-[350px] w-[620px] rounded-xl border overflow-hidden">
                      <div className="w-full h-full">
                        <Image
                          alt="carousel2"
                          src={carousel2}
                          style={{
                            width: "100%",
                            height: "100%",
                          }}
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="px-3 ml-3  overflow-hidden w-[500px]">
                      <span className="text-2xl block mt-3 font-semibold">
                        Introduction to Zest Protocol
                      </span>

                      <span className="text-ellipsis text-zinc-500 mt-3 block">
                        Zest Protocol is a decentralized lending platform on
                        Bitcoin, offering transparent, on-chain credit
                        solutions. It connects borrowers and lenders directly
                        enhancing interoperability and optimizing decentralized
                        finance (DeFi) experiences.
                      </span>

                      <hr className="my-4" />

                      <div className="flex flex-row relative">
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

                        <span className="px-3 ml-[-16px] py-2 border border-zinc-500 rounded-full bg-zinc-800 text-sm text-center flex justify-center items-center">
                          490
                        </span>
                      </div>
                      <Button
                        variant="default"
                        className="bg-indigo-600 mt-6 text-white py-6 px-5 text-base "
                      >
                        Begin your journey
                      </Button>
                    </div>
                  </div>
                </CarouselItem>

                <CarouselItem>
                  <div className="grid auto-cols-max grid-flow-col border p-4 rounded-xl bg-zinc-900/40">
                    <div className="h-[350px] w-[620px] rounded-xl border overflow-hidden">
                      <div className="w-full h-full">
                        <Image
                          alt="carousel3"
                          src={carousel3}
                          style={{
                            width: "100%",
                            height: "100%",
                          }}
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="px-3 ml-3  overflow-hidden w-[500px]">
                      <span className="text-2xl block mt-3 font-semibold">
                        Introduction to Squid Router
                      </span>

                      <span className="text-ellipsis text-zinc-500 mt-3 block">
                        SquidRouter is a Web3 dApp enabling seamless cross-chain
                        swaps and liquidity management. It connects multiple
                        blockchains, allowing users to trade assets efficiently
                        and securely across diverse networks
                      </span>

                      <hr className="my-4" />

                      <div className="flex flex-row relative">
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

                        <span className="px-3 ml-[-16px] py-2 border border-zinc-500 rounded-full bg-zinc-800 text-sm text-center flex justify-center items-center">
                          490
                        </span>
                      </div>
                      <Button
                        variant="default"
                        className="bg-indigo-600 mt-6 text-white py-6 px-5 text-base "
                      >
                        Begin your journey
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className=" " />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default DailyNewAlph;
