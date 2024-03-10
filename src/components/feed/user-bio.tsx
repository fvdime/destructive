import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../shared/button";
import FollowButton from "./follow-button";

const UserBio = ({ user, isOwn, id }: { user: any; isOwn: boolean, id: string}) => {
  const userId = user.id;

  const isFollowing = user.followedBy.some(
    (follow: any) => follow.followerId === id
  );

  return (
    <main className="p-4 lg:py-4 antialiased w-full h-full border-b border-secondary mb-4">
      <div className="w-full f-full flex flex-row justify-start items-center gap-8 md:gap-16">
        <div className="flex flex-col gap-2 w-48">
          {user.profilePic ? (
            <Image
              height={128}
              width={128}
              className="w-32 h-32 rounded-full object-cover"
              src="/atsushi3.jpg"
              alt="profile image"
            />
          ) : (
            <Image
              height={128}
              width={128}
              className="w-32 h-32 rounded-full object-cover"
              src="/atsushi3.jpg"
              alt="profile image"
            />
          )}
        </div>
        <div className="flex flex-col gap-2 w-full">
        <h2 className="text-xl text-start">{user.username}</h2>

          <ul className="flex space-x-8">
            <li>
              <span className="font-semibold mr-1">{user.post.length} </span>
              {user.followedBy.length === 1 ? "post" : "posts"}
            </li>
            <li>
              <span className="font-semibold mr-1">
                {user.followedBy.length}{" "}
              </span>
              {user.followedBy.length === 1 ? "follower" : "followers"}
              
            </li>
            <li>
              <span className="font-semibold mr-1">
                {user.following.length}
              </span>
              following
            </li>
          </ul>

          <div className="">
            <h1 className="font-semibold">
              {user.name ? user.name : ""}
            </h1>
            <h1 className="leading-tight">
              {user.bio ? user.bio : ""}
            </h1>
          </div>
          <div className="flex flex-row items-center gap-4 mt-4">
          <FollowButton userId={userId} isFollowing={isFollowing}/>

            <Button
              label={isOwn ? "Edit Profile" : "Message"}
              fullWidth
              secondary
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserBio;
