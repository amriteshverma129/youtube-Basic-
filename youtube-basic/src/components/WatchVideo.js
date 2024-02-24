import React from "react";
import { useSearchParams } from "react-router-dom";

const WatchVideo = () => {
  const [param] = useSearchParams();
  console.log(param.get("v"));

  return (
    <div>
      <iframe
        width="1000"
        height="600"
        title="youtube Video"
        src={`https://www.youtube.com/embed/${param.get("v")}`}
        allow="accelerameter; autoplay; clipboard-write; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchVideo;
