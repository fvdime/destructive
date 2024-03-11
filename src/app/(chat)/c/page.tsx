import Chat from "@/components/chat/chat";
import Message from "@/components/chat/message";
import MessageForm from "@/components/forms/message-form";
import Link from "next/link";
import React from "react";

export default function ChatPage() {
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
      <Chat />
      <MessageForm />
    </>
  );
}
