import Link from "next/link";
import React from "react";
import { TabsTrigger } from "../ui/tabs";

const TabLink = ({
  text,
  href,
  active,
}: {
  text: string;
  href: string;
  active: boolean;
}) => {
  return (
    <>
      <Link href={href}>
        <TabsTrigger
          aria-selected={active}
          data-state={active ? 'active' : 'inactive'}
          value="Essentials"
          className={`rounded-full overflow-hidden h-10 px-8 ${active ? 'data-[state=active]:bg-zinc-700' : '' }  `}
        >
          {text}
        </TabsTrigger>
      </Link>
    </>
  );
};

export default TabLink;
