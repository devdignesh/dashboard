import React from "react";

interface Props {
  children: React.ReactNode;
  active?: boolean;
  isNew?:boolean;
}
const HeaderItem = ({ children, active, isNew }: Props) => {
  
  return (
    <>
      <div className="flex flex-col h-full hover:cursor-pointer px-3">
        <div className="h-full flex items-center ">
          <span className=" text-zinc-400">{children}</span>
          {isNew ? <span className="bg-indigo-600 rounded-lg ml-2 text-[12px] px-2">New</span> : ''}
        </div>
        {active ? <span className="h-[2px] bg-white rounded-full"></span> : ""}

      </div>
    </>
  );
};

export default HeaderItem;
