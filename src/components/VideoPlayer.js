import React from "react";
//iframe src는 그대로 두고
// 타이틀과 디스크립션만 fakeData에서 가져오기
const VideoPlayer = props => {
  return (
    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          src={props.stateInfo.videoUrl}
          // src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video-player-details">
        <h3>{props.stateInfo.vdTitle}</h3>
        <div>{props.stateInfo.vdDesc}</div>
        {/* <h3>{props.arr[0].snippet.title}</h3>
      <div>{props.arr[0].snippet.description}</div> */}
      </div>
    </div>
  );
};

export default VideoPlayer;
