import React from "react";
import WatchLaterEnrtry from "./WatchLaterEntry"

const WatchLater = props => {
    const arr = props.watchList;
    let arrMap;
    if(arr.length === 0) {
      arrMap = <div>Watch Latet List is Empty</div> 
    }
    else {
      arrMap = arr.map((list) => (
        <WatchLaterEnrtry 
          key={list["datetime"]}
          video={list["video"]}
          watchLaterClickDelete={props.watchLaterClickDelete}
          datetime={list["datetime"]}
          watchLaterClickDeleteOnly={props.watchLaterClickDeleteOnly}
        />
      ))
    }
    return (
        <div className="watch-later-window">
            <h3 className="watch-later-list-title">Watch Later List</h3>
            <div className="watch-later-list">{arrMap}</div>
        </div>
    );
}

export default WatchLater;