import React from "react";

const VideoPlayer = props => { // fakedata[0]
  if (props.video === null) {
    return null;
  }

  return (
    <div className="video-player-window">
      <div className="video-player">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src={`https://www.youtube.com/embed/${props.video.id.videoId}`}
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-player-details">
          <h3>{props.video.snippet.title}</h3>
          <div>{props.video.snippet.description}</div>
        </div>
      </div>
      <div className="watch-later-button">
        <button 
          className="watch-later-btn" 
          onClick={() => props.watchLaterClickHandle(props.video)}>
          watch later
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
