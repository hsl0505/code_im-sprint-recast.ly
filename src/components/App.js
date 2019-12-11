import React from "react";
import Nav from "./Nav";
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";

import { YOUTUBE_API_KEY } from "../../config/youtube";
// import searchYouTube from "../searchYouTube";

import { fakeData } from "./__test__/fakeData";
console.log(fakeData);
let tempArr = fakeData;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: tempArr,
      currentVideo: tempArr[0],
      currentInput: ""
    };

    this.clickHandler = this.clickHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.searchClickHandle = this.searchClickHandle.bind(this);
    // this.setting = this.setting.bind(this)

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
  
  handleChange(event) {
    this.setState({
      currentInput : event.target.value
    })
  }
  
  searchClickHandle(callback) {  //setTimeout
    setTimeout(() => {
      const temp = {
        query : this.state.currentInput,
        max : 5,
        key : YOUTUBE_API_KEY
      }
      callback(temp, (json) => {
        this.setState({
          videos : json.items,
          currentVideo : json.items[0]
        })
      })
    }, 0)
  }
  
  
  // componentDidMount() {

  // }

  render() {
    return (
      <div>
        <Nav handleChange={this.handleChange} searchClickHandle={this.searchClickHandle}/>
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
    );
  }
}
// const App = () => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer arr={fakeData} />
//     </div>
//     <div className="col-md-5">
//       <VideoList arr={fakeData} />
//     </div>
//   </div>
// );

export default App;
