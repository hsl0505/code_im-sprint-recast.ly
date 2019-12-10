import React from "react";
//iframe src는 그대로 두고
// 타이틀과 디스크립션만 fakeData에서 가져오기

const VideoPlayer = props => {
  console.log(props.video)
  if (props.video === null) {
    return null
  }
  
  return (
    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          // src={props.display.여기바꿔야된당}
          src={props.video.snippet.thumbnails.default.url}
          allowFullScreen
        ></iframe>
      </div>
      <div className="video-player-details">
        <h3>{props.video.snippet.title}</h3>
        <div>{props.video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoPlayer;
