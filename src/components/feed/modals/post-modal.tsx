"use client";

import React, { useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Comment from "../comment";
import CommentForm from "@/components/forms/comment-form";
import { dateFormat } from "@/libs/date";
import SettingsModal from "../settings-modal";

export default function PostModal({
  post,
  comment,
  isOwn,
  userTID,
}: {
  post: any;
  comment: any;
  isOwn: boolean;
  userTID: string;
}) {
  const overlay = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const router = useRouter();

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
              <Link href={`/user/${post.user.id}`}>
                <Image
                  height={36}
                  width={36}
                  className="w-9 h-9 rounded-full object-cover "
                  src={
                    post.user.profilePic
                      ? process.env.NEXT_PUBLIC_AWS_BUCKET_URL +
                        `${post.user.profilePic}`
                      : "/anonymous.webp"
                  }
                  alt="profile image"
                />
              </Link>
              <Link
                href={`/user/${post.user.id}`}
                className="font-semibold text-sm"
              >
                {post.user.username}
              </Link>
            </div>
            <SettingsModal isOwn={isOwn} postId={post.id} type="post" />
          </div>
          <div className="w-full h-[80vh] relative mt-2.5 rounded-lg">
            <Image
              fill
              alt="post image"
              src={process.env.NEXT_PUBLIC_AWS_BUCKET_URL + `${post.image}`}
              className="w-fit h-fit rounded-lg absolute object-contain"
            />
          </div>
          <div className="my-2 text-sm">
            <span className="font-medium mr-2 truncate">
              {post.user.username}
            </span>
            {post.content}
            {post.hashtags.length > 0 &&
              post.hashtags.map(
                (hashtag: string, i: number) =>
                  hashtag && (
                    <span key={i} className="text-gray-600 ml-2">
                      #{hashtag}
                    </span>
                  )
              )}
          </div>
          <p className="text-xs text-gray-600 w-full text-end">
            <time>{time}</time>
          </p>
        </div>
      </main>
      <CommentForm postId={post.id} />
      {comment.length > 0 ? (
        <>
          {comment.map((item: any) => (
            <Comment key={item.id} item={item} userTID={userTID} />
          ))}
        </>
      ) : (
        <span className="text-sm text-gray-600 mb-8">No comments yet</span>
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
        className="flex flex-col absolute h-[95%] w-full bottom-0 bg-white rounded-t-3xl px-8 py-8 pb-16 md:pb-0 overflow-auto"
      >
        <div>{BodyContent}</div>
      </div>
    </div>
  );
}
