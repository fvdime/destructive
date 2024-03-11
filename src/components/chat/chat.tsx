import React from "react";
import Message from "./message";

const Chat = () => {
  return (
    <div className="h-full w-full overflow-y-scroll lg:pb-28">
      <div className="flex flex-col">
        <Message />

      </div>
    </div>
  );
};

export default Chat;
