import React from "react";
import Nav from "./Nav";
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";

import { fakeData } from "./__test__/fakeData";

console.log(fakeData);

let tempArr = fakeData;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: tempArr[0],
      videos: tempArr
      // videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
      // vdTitle: "default title",
      // vdDesc: "default description"
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  // 리스트엔트리 클릭
  clickHandler(event) {
    const clicked = event.target.textContent;
    let temp;
    for (let i = 0; i < this.state.videos.length; i++) {
      if (tempArr[i]["snippet"]["title"] === clicked) {
        temp = tempArr[i];
      }
    }
    this.setState({
      currentVideo: temp
    });
  }

  render() {
    return (
      <div>
        <Nav searchYouTube={this.props.searchYouTube} />
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
