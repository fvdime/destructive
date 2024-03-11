import ChatLayoutComponent from "@/components/chat/chat-layout";
import React from "react";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ChatLayoutComponent>{children}</ChatLayoutComponent>
    </>
  );
}