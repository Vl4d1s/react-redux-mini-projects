import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const renderedList = videos.map((video) => {
    return (
      <div>
        <VideoItem video={video} />
      </div>
    );
  });
  return <div>{renderedList}</div>;
};

export default VideoList;
