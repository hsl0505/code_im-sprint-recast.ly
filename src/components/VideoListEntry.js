import React from "react";

const VideoListEntry = props => {
  let list = props.dataList.snippet;
  return (
    <div className="video-list-entry">
      <div className="media-left media-middle">
        <img
          className="media-object"
          src={list.thumbnails.default.url}
          alt=""
        />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title">{list.title}</div>
        <div className="video-list-entry-detail">{list.description}</div>
      </div>
    </div>
  );
};

export default VideoListEntry;
