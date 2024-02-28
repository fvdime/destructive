import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../shared/button";

const UserBio = () => {
  return (
    <main className="p-4 lg:py-4 antialiased w-full h-full border-b border-secondary mb-4">
      <div className="w-full h-full flex flex-col gap-2">
        <div className="flex items-center flex-row justify-between w-full">
          <div className="flex items-center gap-2">
            <Image
              height={64}
              width={64}
              className="w-16 h-16 rounded-full object-cover"
              src="/atsushi3.jpg"
              alt="profile image"
            />
            <h1 className="font-semibold text-base">Username</h1>
          </div>
          <div className="flex flex-row w-fit gap-8 text-center">
            <p className="text-sm font-semibold">
              16 <br /> Post
            </p>
            <p className="text-sm font-semibold">
              99 <br /> Follower
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full gap-2">
          <h1 className="font-semibold text-base mr-2 text-gray-900">
            Full name
          </h1>
          <h1 className="leading-tight text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            odio! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className="flex flex-row items-center gap-4 mt-4">
            <Button label="Follow" fullWidth secondary />
            <Button label="Message" fullWidth secondary />
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserBio;
