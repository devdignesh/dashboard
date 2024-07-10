import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa";

interface Props {
  image: string;
  title: string;
}
const CreatorCard = ({ image, title }: Props) => {
  return (
    <div className="relative group/item sm:h-[400px]  h-[300px] rounded-2xl overflow-hidden border">
      <Image
        src={image}
        alt=""
        width={"100"}
        height={"100"}
        className="w-full h-full object-cover"
        layout="responsive"
      />

      <div className="absolute top-0 right-0 border p-2 m-4 bg-black/80 rounded-full">
        <Image
          src={"/images/reel-video.svg"}
          alt="reels"
          width={"20"}
          height={"20"}
          className=""
        />
      </div>
      <div className="absolute inset-x-0 bg-gradient-to-t from-black  bottom-0 h-52 p-4"></div>
      <div className="absolute inset-x-0  bottom-0  p-4">
        <span className="text-[22px]">
         {title}
        </span>
      </div>

      <div className="absolute invisible group-hover/item:visible  hover:bg-black/30  top-0 h-full w-full ">
        <div className="flex h-full justify-center items-center cursor-pointer">
          <div className="p-5 border bg-black/75 rounded-full ">
            <FaPlay size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorCard;
