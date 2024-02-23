"use client";

import React, { useState, useRef, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";

interface PostFormProps {
  type?: "Create" | "Update";
}

export default function PostModal({ type }: PostFormProps) {
  const pathname = usePathname();
  const overlay = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const router = useRouter();

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
    <div className="flex flex-col gap-4">
      {/* <div className='relative cursor-pointer hover:opacity-50 transition duration-200 ease-in border-dashed border-2 p-20 flex flex-col border-slate-600 justify-center items-center text-slate-800'>
        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 12.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/>
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 3h-2l-.447-.894A2 2 0 0 0 12.764 1H7.236a2 2 0 0 0-1.789 1.106L5 3H3a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V5a2 2 0 0 0-2-2Z"/>
        </svg>
      </div> */}
      <input type="file" />
      <textarea
        name=""
        id=""
        cols={20}
        rows={5}
        className="border-b border-gray-300 p-2"
        placeholder="write desc..."
      ></textarea>
      <input
        type="text"
        placeholder="hashtags"
        className="border-b border-gray-300 p-2 "
      />
      <button
        type="submit"
        className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Submit
      </button>
    </div>
  );

  const FooterContent = (
    <div className="text-gray-400 text-center mt-1">
      <p>
        I agree with the
        <span className="text-sky-700 cursor-pointer hover:underline">
          {" "}
          terms and conditions.
        </span>
      </p>
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
        className="flex flex-col absolute h-[95%] w-full bottom-0 bg-white rounded-t-3xl lg:px-40 px-8 pt-14 pb-72 overflow-auto"
      >
        {BodyContent}
        {FooterContent}
      </div>
    </div>
  );
}
