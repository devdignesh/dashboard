import Link from "next/link";
import React, { ReactNode } from "react";

interface Props {
  children: React.ReactNode;
}
const FooterLink = ({ children }: Props) => {
  return (
    <span className="block cursor-pointer text-sm mt-2 hover:text-white text-gray-400/70 transition  duration-500 ease-in-out">
       <Link href={'#'} >{children}</Link>
    </span>
  );
};

export default FooterLink;
