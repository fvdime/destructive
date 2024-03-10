import React from "react";
import Image from "next/image";
import Link from "next/link";
import LikeButton from "./like-button";
import { dateFormat } from "@/libs/date";

const Post = ({ post}: { post: any}) => {
  const timestamp = dateFormat(post.createdAt);
  return (
    <div className="w-full h-full mb-4 px-2 text-black">
      <div className="flex flex-col gap-1">
        <div className="flex flex-col w-full leading-1.5 p-4 border-gray-200 hover:border-gray-300 rounded-xl border">
          <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
            <Link href={`/user/${post.user.id}`}>
              {post.user.profilePic ? (
                <Image
                  height={32}
                  width={32}
                  className="w-8 h-8 rounded-full object-cover"
                  src="/atsushi3.jpg"
                  alt="profile image"
                />
              ) : (
                <Image
                  height={32}
                  width={32}
                  className="w-8 h-8 rounded-full object-cover"
                  src="/atsushi3.jpg"
                  alt="profile image"
                />
              )}
            </Link>
            <div className="w-full h-full flex flex-row justify-between items-center">
              <Link href={`/user/${post.user.id}`}>
                <span className="text-sm font-semibold">
                  {post.user.username}
                </span>
              </Link>
              <span className="text-sm font-normal text-gray-500 rotate-90 cursor-pointer">
                ...
              </span>
            </div>
          </div>
          <div className="w-full h-96 relative my-2.5">
            <Link href={`/feed/${post.id}`}>
              <Image
                fill
                alt="post image"
                src="/atsushi4.jpg"
                className="w-auto h-auto rounded-lg absolute object-contain"
              />
            </Link>
          </div>
          {/* <LikeButton likedId={post.likedIds} postId={post.id}/> */}
          <div className="mb-2 text-sm">
            <span className="font-medium mr-2 truncate">
              {post.user.username}
            </span>
            {post.content}
          </div>
          <Link
            href={`/feed/${post.id}`}
            className="text-xs font-medium text-gray-400"
          >
            View comments
          </Link>
          <time className="text-xs font- text-gray-400 mt-2 w-full text-end">
            {timestamp}
          </time>
        </div>
      </div>
    </div>
  );
};

export default Post;
