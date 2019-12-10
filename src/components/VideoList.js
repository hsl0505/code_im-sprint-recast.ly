import React from "react";
import VideoListEntry from "./VideoListEntry";


const VideoList = (props) => {
  const arr = props.videos;
  const mapArr = arr.map(list => (
    <VideoListEntry key={list.id.videoId} video={list} clickHandler={props.clickHandler} />
  ));
  return <div className="video-list media">{mapArr}</div>
}

// class VideoList extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     const arr = this.props.arr;
//     const mapArr = arr.map(list => (
//       <VideoListEntry key={list.id.videoId} video={list} clickHandler={this.props.clickHandler} />
//     ));
//     return <div className="video-list media">{mapArr}</div>;
//   }
// }

export default VideoList;
