import React from "react";

const Search = props => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

const searchClick = () => {
  // const input = document.getElementsByClassName("form-control");
  // input.value 이런식으로 query를 받고
  // searchYouTube에 담고
  // callback을 명시: setState를 이용해서 json의 items를 state의 videos로 넘겨줌
};
export default Search;
