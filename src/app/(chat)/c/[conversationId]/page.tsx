import { getMessages } from "@/actions/message.action";
import Chat from "@/components/chat/chat";
import MessageForm from "@/components/forms/message-form";
import Link from "next/link";
import React from "react";

export default async function SingleChatPage({ params }: any) {
  const conversationId = params.conversationId

  const messages = await getMessages(conversationId)
  console.log(messages)
  return (
    <>
      <header className="md:flex justify-between hidden border-b border-zinc-300">
        <Link
          href="#"
          className="block p-4 font-bold whitespace-nowrap truncate"
        >
          Username
        </Link>
      </header>
      {messages?.map((message) => (
        <Chat key={message.id} message={message} />
        ))}
      {/* <MessageForm /> */}
    </>
  )
}
