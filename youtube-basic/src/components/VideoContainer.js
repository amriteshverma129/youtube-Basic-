import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { useDispatch, useSelector } from "react-redux";
import store from "../utils/appStore";
import { setVideoList } from "../utils/videoSlice";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  // const [videoList, setVideoList] = useState([]);
  const videoList = useSelector((store) => store.video.videoList);

  useEffect(() => {
    //console.log(process.env.REACT_APP_GOOGlE_API_KEY);
    getYoutubeVideoList();
  }, []);

  const getYoutubeVideoList = async () => {
    try {
      const response = await fetch(
        YOUTUBE_VIDEO_API + process.env.REACT_APP_YOUTUBE_API_KEY
      );
      const data = await response.json();
      dispatch(setVideoList(data.items));
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  return (
    <div className="flex flex-wrap">
      {videoList?.map((item) => {
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
