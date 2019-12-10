import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import { YOUTUBE_API_KEY } from "../config/youtube";

console.log(App);
console.log(YOUTUBE_API_KEY);

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById("app")
);
