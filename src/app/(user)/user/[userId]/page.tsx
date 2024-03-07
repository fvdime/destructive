import UserModal from "@/components/feed/modals/user-modal";
import { getToken, getUserIdFromToken } from "@/libs/sign-token";
import React from "react";

export default function UserPage({ params }: any) {
  const token = getToken();
  const id = getUserIdFromToken(token) as string;
  console.log("id:::::::::::::::::", id);
  const userId = params.userId;

  const isOwn = userId == id;
  console.log(isOwn)

  return (
    <>
      <UserModal />
    </>
  );
}
