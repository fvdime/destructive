import React from "react";
import Image from "next/image";
import Link from "next/link";

const SinglePost = () => {
  return (
    <>
      <main className="py-4 lg:py-8 antialiased w-full h-full">
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
              quia dignissimos. Cumque eius veritatis blanditiis? Eos.
            </h1>
          </div>
        </div>
      </main>
    </>
  );
};

export default SinglePost;
