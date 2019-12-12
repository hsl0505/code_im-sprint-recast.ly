/* eslint-disable max-len */
import React from "react";

const WatchLaterEntry = props => {
    let list = props.video.snippet;
    return (
      <div className="watch-later-list-window">
        <span className="delete-only" onClick={() => props.watchLaterClickDeleteOnly(props.datetime)}>X</span>
        <div className="watch-later-list-entry" 
          onClick={() => props.watchLaterClickDelete(props.video, props.datetime)}
          id={props.id}
        >
          <div className="media-left media-middle">
            <img 
              className="media-object" 
              src={list.thumbnails.default.url} 
              alt=""/>
          </div>
          <div className="media-body">
            <div className="watch-later-list-entry-title video-list-entry-title" >{list.title}</div>
            <div className="watch-later-list-entry-detail video-list-entry-detail">{list.description}</div>
          </div>
        </div>
      </div>

    )
}

export default WatchLaterEntry;