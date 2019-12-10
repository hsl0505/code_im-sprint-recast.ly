import React from "react";
import Nav from "./Nav";
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";

import { fakeData } from "./__test__/fakeData";
console.log(fakeData);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
      vdTitle: "default title",
      vdDesc: "default description"
    };
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer stateInfo={this.state} />
        </div>
        <div className="col-md-5">
          <VideoList arr={fakeData} />
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
