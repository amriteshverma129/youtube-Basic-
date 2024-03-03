import React, { useEffect } from "react";
import VideoCard from "./VideoCard";
import { useDispatch, useSelector } from "react-redux";
import { setVideoList } from "../utils/slices/videoSlice";
import { getPopularYouTubeVideos } from "../utils/functions/functions";
import { closeMenu } from "../utils/slices/appSlice";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const videoList = useSelector((store) => store.video.videoList);

  useEffect(() => {
    dispatch(closeMenu());
    getYoutubeVideoList();
  }, []);

  const getYoutubeVideoList = async () => {
    try {
      const data = await getPopularYouTubeVideos();
      dispatch(setVideoList(data.items));
    } catch (error) {
      console.log(error.message);
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
