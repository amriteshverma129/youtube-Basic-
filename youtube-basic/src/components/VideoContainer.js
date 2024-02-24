import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    //console.log(process.env.REACT_APP_GOOGlE_API_KEY);
    getYoutubeVideoList();
  }, []);

  const getYoutubeVideoList = async () => {
    try {
      const response = await fetch(YOUTUBE_VIDEO_API);
      const data = await response.json();
      console.log(data);
      setVideoList(data.items);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  return (
    <div className="flex flex-wrap">
      {videoList.map((item, index) => {
        return (
          <React.Fragment key={item.id}>
            <VideoCard item={item} />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default VideoContainer;
