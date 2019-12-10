import React from "react";
import VideoListEntry from "./VideoListEntry";

class VideoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const arr = this.props.arr;
    const mapArr = arr.map(list => (
      <VideoListEntry key={list.id.videoId} dataList={list} />
    ));
    return <div className="video-list media">{mapArr}</div>;
  }
}

export default VideoList;
