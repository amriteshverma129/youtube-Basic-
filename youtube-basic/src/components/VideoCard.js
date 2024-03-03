import React from "react";
import { useNavigate } from "react-router";

const VideoCard = ({ item }) => {
  const navigate = useNavigate();
  const { snippet, id } = item;
  const { thumbnails, title, channelTitle } = snippet;

  const videoId = id.videoId ? id.videoId : id;
  return (
    <div
      className="shadow-md p-2 m-2 w-22 cursor-pointer"
      onClick={() => navigate("/watch?v=" + videoId)}
    >
      <img
        src={thumbnails.medium.url}
        className="rounded-lg"
        alt={thumbnails.medium.url}
      />
      <div>
        <h1 className="font-bold"> {title.slice(0, 30)}...</h1>
        <span>{channelTitle}</span>
        <span>{item?.statistics?.viewCount}</span>
      </div>
    </div>
  );
};

export default VideoCard;
