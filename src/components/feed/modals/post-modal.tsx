"use client";

import React, { useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/components/shared/button";
import Image from "next/image";
import Comment from "../comment";
import CommentForm from "@/components/forms/comment-form";
import { dateFormat } from "@/libs/date";

export default function PostModal({
  post,
  comment,
  isOwn,
}: {
  post: any;
  comment: any;
  isOwn: boolean;
}) {
  const overlay = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const router = useRouter();

  console.log("IS OWNNNNNNN", isOwn);
  const timestamp = post?.createdAt;
  const time = dateFormat(timestamp);

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
              {post.user.profilePic ? (
                <Link href={`/user/${post.user.id}`}>
                  <Image
                    height={36}
                    width={36}
                    className="w-9 h-9 rounded-full object-cover "
                    src="/atsushi3.jpg"
                    alt="profile image"
                  />
                </Link>
              ) : (
                <Link href={`/user/${post.user.id}`}>
                  <Image
                    height={36}
                    width={36}
                    className="w-9 h-9 rounded-full object-cover "
                    src="/atsushi3.jpg"
                    alt="profile image"
                  />
                </Link>
              )}
              <Link
                href={`/user/${post.user.id}`}
                className="font-semibold text-sm"
              >
                {post.user.username}
              </Link>
              
            </div>
            <div className="w-auto flex flex-row justify-center items-center gap-4">
              <button type="button" className="text-sm text-gray-600 rotate-90">
                ...
                {/* <time>{date}</time> */}
              </button>
            </div>
          </div>
          <div className="w-full h-[80vh] relative mt-2.5 bg-gray-200/30 rounded-lg">
            <Image
              fill
              alt="post image"
              src="/atsushi4.jpg"
              className="w-fit h-fit rounded-lg absolute object-contain"
            />
          </div>
          <p className="break-words text-sm">{post.content}</p>

          <p className="text-xs text-gray-600 w-full text-end">
            <time>{time}</time>
          </p>
        </div>
      </main>
      <CommentForm postId={post.id} />
      {comment.length > 0 ? (
        <>
          {comment.map((item: any) => (
            <Comment key={item.id} item={item} isOwn={isOwn} />
          ))}
        </>
      ) : (
        <span className="text-sm text-gray-600">No comments yet</span>
      )}
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
