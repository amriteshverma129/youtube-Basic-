import React, { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { clearChat } from "../utils/slices/liveChatSlice";
import { addMessage } from "../utils/functions/functions";

const LiveChatBox = () => {
  const chatText = useRef();
  const dispatch = useDispatch();
  const liveChatsArray = useSelector((store) => store.liveChat.liveChatsArray);

  useEffect(() => {
    let count = 0;
    const intervalId = setInterval(() => {
      addMessage("Amritesh", " we should never give up" + count++, dispatch);
    }, 1500);
    return () => {
      clearInterval(intervalId);
      dispatch(clearChat());
    };
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addMessage("Amritesh", chatText.current.value, dispatch);
  };
  return (
    <div className="mx-2 p-2 h-[600px] w-full border-2  rounded-lg border-slate-400">
      <div className="flex flex-col-reverse h-[88%] overflow-scroll">
        {liveChatsArray.map((chat) => {
          return <ChatMessage message={chat.message} name={chat.name} />;
        })}
      </div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-row h-14 border-2  rounded-lg border-slate-400 p-2 my-2"
      >
        <input
          type="text"
          ref={chatText}
          className="flex-1 outline-none focus:outline-none"
        />
        <button
          type="submit"
          className="p-2 bg-slate-400 rounded-md text-white"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChatBox;
