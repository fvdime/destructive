import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../shared/button";
import FollowButton from "./follow-button";
import { createConversation } from "@/actions/conversation.action";

const UserBio = ({
  user,
  isOwn,
  id,
}: {
  user: any;
  isOwn: boolean;
  id: string;
}) => {
  const userId = user.id;
  console.log(userId);

  const isFollowing = user.followedBy.some(
    (follow: any) => follow.followerId === id
  );

  return (
    <main className="p-4 lg:py-4 antialiased w-full h-full border-b border-secondary mb-4">
      <div className="w-full f-full flex flex-row justify-start items-center gap-8 md:gap-16">
        <div className="flex flex-col gap-2 w-48 items-end">
          <Image
            height={112}
            width={112}
            className="w-28 h-28 rounded-full object-cover "
            src={
              user.profilePic
                ? process.env.NEXT_PUBLIC_AWS_BUCKET_URL + `${user.profilePic}`
                : "/anonymous.webp"
            }
            alt="profile image"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h2 className="text-xl text-start">{user.username}</h2>

          <ul className="flex space-x-8">
            <li className="flex flex-col items-start md:flex-row md:gap-1">
              <span className="font-semibold mr-1">{user.post.length} </span>
              <span>{user.followedBy.length === 1 ? "post" : "posts"}</span>
            </li>
            <li className="flex flex-col items-start md:flex-row md:gap-1">
              <span className="font-semibold mr-1">
                {user.followedBy.length}
              </span>
              <span>
                {user.followedBy.length === 1 ? "follower" : "followers"}
              </span>
            </li>
            <li className="flex flex-col items-start md:flex-row md:gap-1">
              <span className="font-semibold mr-1">
                {user.following.length}
              </span>
              <span>following</span>
            </li>
          </ul>

          <div className="">
            <h1 className="font-semibold">{user.name ? user.name : ""}</h1>
            <h1 className="leading-tight">{user.bio ? user.bio : ""}</h1>
          </div>
          <div className="flex flex-row items-center gap-4 mt-4">
            <FollowButton
              userId={userId}
              isFollowing={isFollowing}
              isOwn={isOwn}
            />
            {isOwn ? (
              <Link
                href="/user/edit"
                className="rounded text-center text-semibold border border-secondary transition-all ease-in duration-300 text-sm hover:shadow-md w-full px-8 py-1 font-bold truncate"
              >
                Edit Profile
              </Link>
            ) : (
              <form
                action={async (formData: FormData) => {
                  const userID = formData.get("userID");

                  await createConversation(userID);
                }}
                className="w-full"
              >
                <input type="hidden" name="userID" value={userId} />
                <button
                  type="submit"
                  className="rounded text-center text-semibold border border-secondary transition-all ease-in duration-300 text-sm hover:shadow-md w-full px-8 py-1 font-bold truncate"
                >
                  Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserBio;
