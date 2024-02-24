import React from "react";
import { useNavigate } from "react-router";

const VideoCard = ({ item }) => {
  console.log(item);
  const navigate = useNavigate();
  const { snippet, statistics } = item;
  const { thumbnails, title, channelTitle } = snippet;
  return (
    <div
      className="shadow-md p-2 m-2 w-22"
      onClick={() => navigate("/watch?v=" + item.id)}
    >
      <img src={thumbnails.medium.url} className="rounded-lg" />
      <div>
        <h1 className="font-bold"> {title.slice(0, 30)}...</h1>
        <span>{channelTitle}</span>
        <span>{statistics.viewCount}</span>
      </div>
    </div>
  );
};

export default VideoCard;
