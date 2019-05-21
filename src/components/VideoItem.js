import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video, videoSelect }) => {
  return (
    <div onClick={() => videoSelect(video)} className="video-item item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.high.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
