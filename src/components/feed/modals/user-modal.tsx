"use client";

import React, { useState, useRef, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/components/shared/button";
import Image from "next/image";
import Comment from "../comment";
import CommentForm from "@/components/forms/comment-form";
import UserBio from "../user-bio";
import Post from "../post";

export default function UserModal() {
  const pathname = usePathname();
  const overlay = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const [value, setValue] = useState("");

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  //for exiting when you click anywhere except the white part
  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === overlay.current && onDismiss) {
        onDismiss();
      }
    },
    [onDismiss, overlay]
  );

  const BodyContent = (
    <div className="flex flex-col gap-4 w-full h-full max-w-screen-md mx-auto">
      <UserBio />
      <div className="w-full h-full grid grid-cols-3 gap-2">
        <div className="h-64 w-full  relative">
          <Link href="feed/1">
              <Image
                fill
                alt="post image"
                src="/atsushi4.jpg"
                className="absolute object-cover"
              />
            </Link>
        </div>
        <div className="h-64 w-full  relative">
          <Link href="feed/1">
              <Image
                fill
                alt="post image"
                src="/atsushi4.jpg"
                className="absolute object-cover"
              />
            </Link>
        </div>
        <div className="h-64 w-full  relative">
          <Link href="feed/1">
              <Image
                fill
                alt="post image"
                src="/atsushi4.jpg"
                className="absolute object-cover"
              />
            </Link>
        </div>
        <div className="h-64 w-full  relative">
          <Link href="feed/1">
              <Image
                fill
                alt="post image"
                src="/atsushi4.jpg"
                className="absolute object-cover"
              />
            </Link>
        </div>
        <div className="h-64 w-full  relative">
          <Link href="feed/1">
              <Image
                fill
                alt="post image"
                src="/atsushi4.jpg"
                className="absolute object-cover"
              />
            </Link>
        </div>
        <div className="h-64 w-full  relative">
          <Link href="feed/1">
              <Image
                fill
                alt="post image"
                src="/atsushi4.jpg"
                className="absolute object-cover"
              />
            </Link>
        </div>
        <div className="h-64 w-full  relative">
          <Link href="feed/1">
              <Image
                fill
                alt="post image"
                src="/atsushi4.jpg"
                className="absolute object-cover"
              />
            </Link>
        </div>

      </div>
    </div>
  );

  return (
    <div
      ref={overlay}
      className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/80"
      onClick={handleClick}
    >
      <button
        type="button"
        onClick={onDismiss}
        className="absolute top-2 right-8 text-white/80 hover:text-white/20 duration-500 transition-all ease-in"
      >
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>

      <div
        ref={wrapper}
        className="flex flex-col absolute h-[95%] w-full bottom-0 bg-white rounded-t-3xl px-8 py-8 overflow-auto"
      >
        <div>{BodyContent}</div>
      </div>
    </div>
  );
}
