import React from "react";
import "../style/video.css";

const VideoItem = ({ video, handleVideoSelect }) => {
  return (
    <div className="itemwrapper">
      <div
        onClick={() => handleVideoSelect(video)}
        className=" video-item item"
      >
        <img
          className="ui_image"
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.description}
        />

        <div className="contentwrapper">
          <div className="header ">{video.snippet.title}</div>
          <div className="content ">{video.snippet.description}</div>
        </div>
      </div>
    </div>
  );
};
export default VideoItem;
