import Home from "@/components/home/page";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <>
      <Home>
        {children}
        </Home>
    </>
  );
};

export default layout;
