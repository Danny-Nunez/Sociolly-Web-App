import React from "react";
import splashscreen from "../../svg/videosplashimg.png";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div className="landinginfo">
        <div className="splashimg">
          <img src={splashscreen} alt="splashscreen" />
        </div>
        Please enter a video name then hit search or [ENTER] on the keyboard.
        Enjoy watching your favorite youtube videos with no commercials. Please
        select a video from the results on the right to start watching.
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(typeof video);
  return (
    <div>
      <div className="ui_embed">
        <iframe
          src={videoSrc}
          allowFullScreen
          height="100%"
          width="100%"
          frameborder="0"
          title="Video player"
        />
      </div>
      <div className="ui_segment">
        <h4 className="ui_header">{video.snippet.title}</h4>
        <p>Channel: {video.snippet.channelTitle}</p>
        <p>Publised: {video.snippet.publishedAt}</p>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
