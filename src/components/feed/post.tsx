import React from "react";
import Image from "next/image";
import Link from "next/link";

const Post = () => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col gap-1">
        <div className="flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-xl border dark:bg-gray-700 dark:border-gray-800 dark:hover:border-gray-900">
          <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
            <Link href="user/1">
            <Image
            height={32}
            width={32}
               className="w-8 h-8 rounded-full object-cover "
               src="/atsushi3.jpg"
               alt="profile image"
               />
            </Link>
            <div className="w-full h-full flex flex-row justify-between items-center">
               <Link href="user/1">
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  Bonnie Green
                  </span>
               </Link>

               <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
               11:46
               </span>

            </div>
          </div>
          <Link href="feed/1">
            <p className="text-sm font-normal text-gray-900 dark:text-white">
               This is the new office
            </p>
          </Link>

          <div className="w-full h-96 relative my-2.5">
          <Link href="feed/1">
            <Image fill alt="post image" src="/atsushi4.jpg" className="rounded-lg absolute object-cover" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
