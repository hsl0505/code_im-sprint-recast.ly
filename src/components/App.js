/* eslint-disable max-len */
import React from "react";
import Nav from "./Nav";
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";

import { YOUTUBE_API_KEY } from "../../config/youtube";
import searchYouTube from "../searchYouTube";
import { fakeData } from "./__test__/fakeData";
import WatchLater from "./WatchLater";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: fakeData, // 비디오리스트넘기는 값
      currentVideo: fakeData[0], // 1개만 -> 비디오플레이어
      // currentInput: { isSearched: false, input:''},
      watchList: []
    };

    this.clickHandler = this.clickHandler.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    this.searchClickHandle = this.searchClickHandle.bind(this);
    this.watchLaterClickHandle = this.watchLaterClickHandle.bind(this);
    this.watchLaterClickDelete = this.watchLaterClickDelete.bind(this);
    this.watchLaterClickDeleteOnly = this.watchLaterClickDeleteOnly.bind(this);
  }

  // 리스트엔트리 클릭
  clickHandler(event) {
    const clicked = event.target.textContent;
    let temp;
    for (let i = 0; i < this.state.videos.length; i++) {
      if (this.state.videos[i]["snippet"]["title"] === clicked) {
        temp = this.state.videos[i];
      }
    }
    this.setState({
      currentVideo: temp
    });
  }

  // handleChange() {
  //   const target = event.target;
  //   if (target.value.includes("\"")) {
  //     return null
  //   }
  //   this.setState({
  //     currentInput: { isSearched: false, input:target.value}
  //   });
  // 디바운스 구현이 필요!!!

  // setTimeout(() => {
  //   const temp = {
  //     query: this.state.currentInput,
  //     max: 5,
  //     key: YOUTUBE_API_KEY
  //   };
  //   callback(temp, json => {
  //     if( json.items.length !== 0) {
  //       this.setState({
  //         videos: json.items,
  //         currentVideo: json.items[0]
  //       });
  //     }
  //   });
  // }, 3000);
  // }

  // shouldComponentUpdate() {
  //   const isTemp = this.state.currentInput !== ''
  //   return !isTemp
  // }

  searchClickHandle(targetValue) {
    const temp = {
      query: targetValue,
      max: 4,
      key: YOUTUBE_API_KEY
    };

    searchYouTube(temp, json => {
      if (json.items.length !== 0) {
        this.setState({
          videos: json.items,
          currentVideo: json.items[0]
        });
      }
    });
  }

  componentDidMount() {
    if (localStorage.getItem("watchList") === null) {
      localStorage.setItem("watchList", JSON.stringify(this.state.watchList));
    }
    let previousWatchList = JSON.parse(localStorage.getItem("watchList"));
    const temp = {
      query: "코드스테이츠",
      max: 4,
      key: YOUTUBE_API_KEY
    };
    searchYouTube(temp, json => {
      this.setState({
        videos: json.items,
        currentVideo: json.items[0],
        watchList: previousWatchList
      });
    });
  }

  // ----------------------------------------리캐스트 알파---------------------------------------------------------------

  watchLaterClickHandle(video) {
    let temp = `${new Date().getFullYear()}${new Date().getHours()}${new Date().getMinutes()}${new Date().getSeconds()}${new Date().getMilliseconds()}`;
    this.setState({
      watchList: this.state.watchList.concat({ video: video, datetime: temp })
    });
  }

  componentDidUpdate() {
    localStorage.setItem("watchList", JSON.stringify(this.state.watchList));
  }

  watchLaterClickDelete(video, datetime) {
    this.setState({
      currentVideo: video,
      watchList: this.state.watchList.filter(
        val => val["datetime"] !== datetime
      )
    });
  }

  watchLaterClickDeleteOnly(datetime) {
    this.setState({
      watchList: this.state.watchList.filter(
        val => val["datetime"] !== datetime
      )
    });
  }

  render() {
    if (this.state.videos === null) {
      return null;
    }
    return (
      <div>
        <Nav
          handleChange={this.handleChange}
          searchClickHandle={this.searchClickHandle}
          valueForSearch={this.state.currentInput}
        />
        <div id="contents">
          <div className="col-md-7">
            <VideoPlayer
              video={this.state.currentVideo}
              watchLaterClickHandle={this.watchLaterClickHandle}
            />
          </div>
          <div className="col-md-5">
            <VideoList
              videos={this.state.videos}
              clickHandler={this.clickHandler}
              watchLaterClickHandle={this.watchLaterClickHandle}
            />
          </div>
        </div>
        <WatchLater
          watchList={this.state.watchList}
          watchLaterClickDelete={this.watchLaterClickDelete}
          watchLaterClickDeleteOnly={this.watchLaterClickDeleteOnly}
        />
      </div>
    );
  }
}

export default App;
