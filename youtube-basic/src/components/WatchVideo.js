import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import CommentContainer from "./CommentContainer";

const WatchVideo = () => {
  const [param] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="p-3">
      <iframe
        width="1000"
        height="600"
        title="youtube Video"
        src={`https://www.youtube.com/embed/${param.get("v")}`}
        allow=" autoplay; clipboard-write; encrypted-media"
        allowFullScreen
      ></iframe>
      <CommentContainer />
    </div>
  );
};

export default WatchVideo;
