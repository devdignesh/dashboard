'use client'
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import TabLink from "./tab-link";
import { usePathname } from "next/navigation";

const AcademyTabs = () => {

  const pathname = usePathname();
  console.log(pathname);
  
 
  return (
    <>
      <div className="flex justify-center mt-14">
        <Tabs defaultValue="account" className="w-[400px] flex justify-center">
          <TabsList className="rounded-full overflow-hidden h-10 p-0 border bg-zinc-900">
             <TabLink text="Essentials" href={'/academy/essentials'} active={pathname === `/academy/essentials`}/>
             <TabLink text="Alpha Hub" href={'/academy/alpha-hub'} active={pathname === `/academy/alpha-hub`}/>
          </TabsList>
        </Tabs>
      </div>
    </>
  );
};

export default AcademyTabs;
