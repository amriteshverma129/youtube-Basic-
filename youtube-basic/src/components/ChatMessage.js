import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex flex-row gap-2 items-center py-2">
      <div className="h-10 w-10 bg-red-300 rounded-full "></div>
      <div className="font-semibold">{name}: </div>
      <div>{message}</div>
    </div>
  );
};

export default ChatMessage;
