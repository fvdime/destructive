"use client";

import { deletePost } from "@/actions/post.actions";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const SettingsModal = ({ isOwn, postId}: { isOwn: boolean, postId: string }) => {
  const [openModal, setOpenModal] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setOpenModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-5 h-full flex items-center justify-center relative">
      <button
        className="text-zinc-600 rotate-90 hover:text-zinc-800"
        type="button"
        onClick={() => setOpenModal(!openModal)}
      >
        ...
      </button>
      {openModal && (
        <div ref={modalRef} className="z-20 absolute right-1 md:right-2 top-8 md:top-8 divide-y divide-zinc-300 rounded-lg shadow-lg w-32 bg-zinc-100">
          <ul className="p-2 text-xs font-medium">
            <li>
              <Link
                href="/"
                className="w-full flex flex-row justify-start gap-1 items-center hover:bg-zinc-200 p-1 rounded mb-1 px-2.5 py-1.5"
              >
                {isOwn ? "Edit Post" : "Report"}
              </Link>
            </li>
            <li>
              <button
                type="submit"
                onClick={async() => {
                  await deletePost(postId)
                }}
                className="w-full flex flex-row justify-start gap-1 items-center hover:bg-zinc-200 px-2.5 py-1.5 rounded mb-1 text-red-600"
              >
                {isOwn ? "Delete" : "Help"}
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SettingsModal;