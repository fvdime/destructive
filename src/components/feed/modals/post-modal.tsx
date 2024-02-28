"use client";

import React, { useState, useRef, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/components/shared/button";
import Image from "next/image";
import Comment from "../comment";
import CommentForm from "@/components/forms/comment-form";

export default function PostModal() {
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
      <main className="p- lg:p-0 antialiased w-full h-full">
        <div className="w-full h-full flex flex-col gap-2">
          <div className="flex items-center not-italic flex-row justify-between w-full ">
            <div className="flex items-center gap-2">
              <Link href="user/1">
                <Image
                  height={32}
                  width={32}
                  className="w-8 h-8 rounded-full object-cover "
                  src="/atsushi3.jpg"
                  alt="profile image"
                />
              </Link>
              <Link href="user/1" className="font-semibold text-lg">
                User name
              </Link>
            </div>
            <div>
              <p className="text-sm text-gray-600">
                <time>Feb 8, 2022</time>
              </p>
            </div>
          </div>
          <div className="w-full h-[70vh] relative mt-2.5">
            <Image
              fill
              alt="post image"
              src="/atsushi4.jpg"
              className="rounded-lg absolute object-cover"
            />
          </div>
          <div className="flex flex-row w-full">
            <h1 className="leading-tight text-sm">
              <Link href="user/1" className="font-semibold text-base mr-2">
                User name
              </Link>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusamus odio! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Vel sapiente inventore totam excepturi delectus,
              natus nesciunt ipsum dolore magnam illo aspernatur tempore nihil
              quia dignissimos. Cumque eius veritatis bla
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex dicta non facilis fugiat ullam dolor assumenda perferendis laboriosam delectus fuga rem accusamus officia voluptates, hic iste cum ratione illo! Incidunt.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem placeat, facere saepe consectetur velit consequatur odit tenetur autem modi praesentium ratione repellendus doloremque rem, veniam nobis deleniti! Ut, reiciendis repudiandae.
              nditiis? Eos.
            </h1>
          </div>
        </div>
      </main>
      <CommentForm/>
      <Comment/>
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
