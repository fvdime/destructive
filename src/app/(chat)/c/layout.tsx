import ChatLayoutComponent from "@/components/chat/chat-layout";
import React from "react";
import { getToken, getUserIdFromToken } from "@/libs/sign-token";
import { GetUserById } from "@/actions/user.action";
import { getConversations } from "@/actions/conversation.action";

export default async function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = getToken();
  const id = getUserIdFromToken(token) as string;

  const currentUser = await GetUserById(id)

  const conversations = await getConversations(id)

  // const recieverIds = conversations.receiverId
  // const reciever = await GetUserById(recieverIds)

  console.log(conversations)
  return (
    <>
      <ChatLayoutComponent currentUser={currentUser}>{children}</ChatLayoutComponent>
    </>
  );
}
