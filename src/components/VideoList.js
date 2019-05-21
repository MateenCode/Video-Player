import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, videoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId || video.id.channelId}
        videoSelect={videoSelect}
        video={video}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
