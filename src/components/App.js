import React from "react";
import Nav from "./Nav";
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";

import { YOUTUBE_API_KEY } from "../../config/youtube";
import searchYouTube from "../searchYouTube";

// import { fakeData } from "./__test__/fakeData";
// console.log(fakeData);
// let tempArr = fakeData;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: null,
      currentVideo: "",
      currentInput: ""
    };

    this.clickHandler = this.clickHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.searchClickHandle = this.searchClickHandle.bind(this);
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

  handleChange(callback) {
    const target = event.target;
    this.setState({
      currentInput: target.value
    });
    setTimeout(() => {
      const temp = {
        query: this.state.currentInput,
        max: 5,
        key: YOUTUBE_API_KEY
      };
      callback(temp, json => {
        this.setState({
          videos: json.items,
          currentVideo: json.items[0]
        });
      });
    }, 3000);
  }

  searchClickHandle(callback) {
    setTimeout(() => {
      const temp = {
        query: this.state.currentInput,
        max: 5,
        key: YOUTUBE_API_KEY
      };
      callback(temp, json => {
        this.setState({
          videos: json.items,
          currentVideo: json.items[0]
        });
      });
    }, 0);
  }

  componentDidMount() {
    console.log("did mount");
    setTimeout(() => {
      const temp = {
        query: "react",
        max: 5,
        key: YOUTUBE_API_KEY
      };
      searchYouTube(temp, json => {
        this.setState({
          videos: json.items,
          currentVideo: json.items[0]
        });
      });
    }, 0);
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
        />
        <div id="contents">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList
              videos={this.state.videos}
              clickHandler={this.clickHandler}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
