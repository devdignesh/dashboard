'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  text: string;
  active?: boolean;
  isNew?: boolean;
  href:string;
}
const HeaderItem = ({ text, active, isNew, href }: Props) => {

  const pathname = usePathname().split("/")[1];
  console.log("path",pathname);
  console.log("text",text);
  
  console.log(pathname === text);
  

  return (
    <>

      <Link href={href} className="h-full">
        <div className="flex flex-col h-full hover:cursor-pointer px-3">
          <div className="h-full flex items-center ">
            <span className=" text-zinc-400 capitalize ">{text}</span>
            {isNew ? (
              <span className="bg-indigo-600 rounded-lg ml-2 text-[12px] px-2">
                New
              </span>
            ) : (
              ""
            )}
          </div>
        
            {pathname === text ? (<span className="h-[2px] bg-white rounded-full"></span>) : ''}
           
        </div>
      </Link>
    </>
  );
};

export default HeaderItem;
