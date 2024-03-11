import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getComments } from "@/actions/comment.action";
import { dateFormat } from "@/libs/date";

const Comment = async ({ item, isOwn }: { item: any; isOwn: boolean }) => {
  const timeStamp = item?.createdAt;
  const time = dateFormat(timeStamp);

  return (
    <div className="px-2 pb-4 border-b" key={item.id}>
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center flex-row gap-2">
          <Link href={`/user/${item.user.id}`}>
            <Image
              height={28}
              width={28}
              className="w-7 h-7 rounded-full object-cover "
              src={
                item.user.profilePic
                  ? process.env.NEXT_PUBLIC_AWS_BUCKET_URL +
                    `${item.user.profilePic}`
                  : "/anonymous.webp"
              }
              alt="profile image"
            />
          </Link>
          <Link href={`/user/${item.user.id}`}>
            <p className="font-semibold text-sm">{item.user.username}</p>
          </Link>
        </div>
        <p className="text-xs text-gray-600">
          <time>{time}</time>
        </p>
      </div>
      <p>{item.comment}</p>
    </div>
  );
};

export default Comment;
