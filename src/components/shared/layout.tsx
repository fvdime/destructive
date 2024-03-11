import React from "react";
import Sidebar from "../feed/sidebar";
import Image from "next/image";
import Link from "next/link";
import { GetUsers } from "@/actions/user.action";

export default async function Layout({
  children,
  currentUserId
}: {
  children: React.ReactNode,
  currentUserId?: string
}) {
  const friendSuggestion = await GetUsers();

  return (
    <>
      <div className="max-w-screen-lg mx-auto">
        <div className="w-full flex flex-row justify-between lg:gap-4 pt-4 h-full">
          <div className="hidden w-1/5 h-full lg:flex lg:flex-col gap-4 sticky top-2">
            <Sidebar currentUserId={currentUserId}/>
          </div>
          <div className="h-full w-full lg:w-3/5 flex flex-col gap-4 overflow-y-auto rounded-lg">
            {children}
          </div>
          <div className="hidden w-1/5 h-full lg:flex lg:flex-col gap-4">
            <div className="min-w-[16rem] p-4 rounded shadow">
              <h5 className="text-sm font-bold leading-none uppercase py-2">
                Friend Suggestions
              </h5>
              <div>
                <ul className="divide-y divide-zinc-200">
                  {friendSuggestion.map((friend) => (
                    <li key={friend.id} className="py-4">
                      <div className="flex items-center flex-row w-full justify-between">
                        <div className="flex flex-row gap-1 items-center">
                          {friend.profilePic ? (
                            <Link href={`/user/${friend.id}`}>
                              <Image
                                height={24}
                                width={24}
                                className="w-6 h-6 rounded-full object-cover "
                                src="/atsushi3.jpg"
                                alt="profile image"
                              />
                            </Link>
                          ) : (
                            <Link href={`/user/${friend.id}`}>
                              <Image
                                height={24}
                                width={24}
                                className="w-6 h-6 rounded-full object-cover "
                                src="/atsushi3.jpg"
                                alt="profile image"
                              />
                            </Link>
                          )}
                          <p className="text-sm font-medium truncate">
                            {friend.username}
                          </p>
                        </div>
                        <Link
                          href={`/user/${friend.id}`}
                          className="inline-flex items-center text-xs font-semibold text-blue-500"
                        >
                          View
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
