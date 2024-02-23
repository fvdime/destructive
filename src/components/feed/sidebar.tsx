"use client"

import usePostModal from "@/hooks/usePostModal";
import Link from "next/link";
import React, { useCallback } from "react";

const Sidebar = () => {
  const sidebarItems = [
    {
      label: "Home",
      href: "/",
      svg: "𖦹",
    },
    {
      label: "Notifications",
      href: "/notifications",
      svg: "❀",
    },
    {
      label: "Profile",
      href: "/user/1",
      svg: "•ﻌ•",
    },
    {
      label: "Home",
      href: "/s",
      svg: "୨୧",
    },
    {
      label: "Home",
      href: "/a",
      svg: "✩",
    },
    {
      label: "Home",
      href: "/b",
      svg: " ྀི",
    },
    {
      label: "Home",
      href: "/d",
      svg: "✿",
    },
  ];

  const PostModal = usePostModal()

  const handleClick = useCallback(() => {
    alert("clicked")
    PostModal.onOpen()
  }, [PostModal])

  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          {/* logo */}
          <h1>destructive</h1>
          {sidebarItems.map((item) => (
            <div key={item.href} className="flex flex-row items-center">
              <div className="relative rounded-full h-14 w-12 flex items-center justify-center p-4 hover:bg-slate-400 hover:bg-opacity-10 cursor-pointer lg:hidden">
                <p className="text-xl  font-semibold">
                  {item.svg}
                </p>
              </div>
              <div className="relative lg:flex hidden items-center gap-4 p-4 rounded-full hover:bg-slate-400 hover:bg-opacity-10 cursor-pointer">
                <p className="text-xl  font-semibold">
                  {item.svg}
                </p>
                <p className="hidden lg:block text-xl">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
          <div>
            <div className="mt-6 lg:hidden rounded-full h-14 w-14 p-4 items-center flex justify-center bg-slate-600 hover:bg-opacity-10 transition cursor-pointer ">
              ⋆
            </div>
            <div className="mt-6 hidden lg:block px-4 py-2 rounded-full bg-slate-600 cursor-pointer transition hover:bg-opacity-10">
              <Link 
              href="/feed/create"
              className="hidden lg:block text-center font-semibold text-[20px]">
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
