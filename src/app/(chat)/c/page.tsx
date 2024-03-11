import React from "react";

export default function ChatPage() {
  return (
    <>
      <header className="md:flex justify-between hidden bg-gray-100 border-b border-zinc-300">
        <h1 className="block p-4 font-bold whitespace-nowrap truncate">
          Messages
        </h1>
      </header>
      <div className="w-full h-[80vh] flex flex-col justify-center items-center gap-4 overflow-y-hidden">
        <h1 className="text-7xl font-bold text-gray-300">ฅ^._.^ฅ</h1>
        <h1 className="text-lg text-gray-700 font-medium">
          Create or select a chat
        </h1>
      </div>
    </>
  );
}
