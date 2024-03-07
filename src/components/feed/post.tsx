import React from "react";
import Image from "next/image";
import Link from "next/link";

const Post = () => {
  return (
    <div className="w-full h-full mb-4 px-2 text-black">
      <div className="flex flex-col gap-1">
        <div className="flex flex-col w-full leading-1.5 p-4 border-gray-200 hover:border-gray-300 rounded-xl border">
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
                <span className="text-sm font-semibold ">Bonnie Green</span>
              </Link>
              <span className="text-sm font-normal text-gray-500">11:46</span>
            </div>
          </div>
          <Link href="feed/1">
            <p className="text-sm font-normal ">This is the new office</p>
          </Link>

          <div className="w-full h-96 relative my-2.5">
            <Link href="feed/1">
              <Image
                fill
                alt="post image"
                src="/atsushi4.jpg"
                className="rounded-lg absolute object-cover"
              />
            </Link>
          </div>
          <div className="w-full flex flex-row items-center justify-start gap-4 mt-2">
            {/* <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
            </svg> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
