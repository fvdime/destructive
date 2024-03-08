import { GetUserById, GetUserProfile } from "@/actions/user.action";
import UserModal from "@/components/feed/modals/user-modal";
import { getToken, getUserIdFromToken } from "@/libs/sign-token";
import React from "react";

export default async function UserPage({ params }: any) {
  const token = getToken();
  const id = getUserIdFromToken(token) as string;
  console.log("id:::::::::::::::::", id);
  const userId = params.userId;

  const isOwn = userId == id;
  console.log(isOwn)

  const user = await GetUserProfile(userId)

  return (
    <>
      <UserModal user={user} isOwn={isOwn}/>
    </>
  );
}
