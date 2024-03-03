import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/slices/appSlice";
import CommentContainer from "./CommentContainer";
import LiveChatBox from "./LiveChatBox";

const WatchVideo = () => {
  const [param] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="p-3 ">
      <div className="flex">
        <iframe
          height="600"
          title="youtube Video"
          src={`https://www.youtube.com/embed/${param.get("v")}`}
          allow=" autoplay; clipboard-write; encrypted-media"
          className="w-2/3"
          allowFullScreen
        ></iframe>
        <div className="w-1/3">
          <LiveChatBox />
        </div>
      </div>
      <CommentContainer />
    </div>
  );
};

export default WatchVideo;
