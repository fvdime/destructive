"use client";

import Link from "next/link";
import React, { useCallback } from "react";

const Sidebar = () => {
  const sidebarItems = [
    {
      label: "Home",
      href: "/",
      svg: "✿",
    },
    {
      label: "Notifications",
      href: "/notifications",
      svg: "✿",
    },
    {
      label: "Profile",
      href: "/user/1",
      svg: "✿",
    },
    {
      label: "Home",
      href: "/s",
      svg: "✿",
    },
    {
      label: "Home",
      href: "/a",
      svg: "✿",
    },
    {
      label: "Home",
      href: "/b",
      svg: "✿",
    },
    {
      label: "Home",
      href: "/d",
      svg: "✿",
    },
  ];

  return (
    <div className="col-span-1 h-full pr-4 md:pr-6 ">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[16rem]">
          {/* logo */}
          <h1 className="text-xl pb-4">destructive</h1>
          {sidebarItems.map((item) => (
            <div key={item.href} className="flex flex-row items-center">
              <div className="lg:flex hidden items-center gap-6 py-2 px-4 rounded-3xl hover:bg-primary hover:bg-opacity-50 cursor-pointer w-full transition-all ease-in duration-300">
                <p className="text-xl font-semibold">{item.svg}</p>
                <p className="hidden lg:block font-medium">{item.label}</p>
              </div>
            </div>
          ))}
          <div>
            <div className="mt-6 hidden lg:block px-4 py-2 rounded-full bg-secondary cursor-pointer hover:bg-opacity-90 transition-all ease-in duration-300">
              <Link
                href="/feed/create"
                className="hidden lg:block text-center font-semibold text-white"
              >
                Share
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
