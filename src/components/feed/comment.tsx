import React from "react";
import Image from "next/image";
import Link from "next/link";

const Comment = () => {
  return (
    <div className="p-6 mb-4">
      <footer className="flex justify-between items-center mb-2">
        <div className="flex items-center flex-row gap-2">
          <Link href="user/1">
            <Image
              height={32}
              width={32}
              className="w-8 h-8 rounded-full object-cover "
              src="/atsushi3.jpg"
              alt="profile image"
            />
          </Link>
          <p className="font-semibold text-sm">Michael Gough</p>
        </div>
        <p className="text-sm text-gray-400">
          <time>Feb 8, 2022</time>
        </p>
      </footer>
      <p className="">
        Very straight-to-point article. Really worth time reading. Thank you!
        But tools are just the instruments for the UX designers. The knowledge
        of the design tools are as important as the creation of the design
        strategy.
      </p>
    </div>
  );
};

export default Comment;
