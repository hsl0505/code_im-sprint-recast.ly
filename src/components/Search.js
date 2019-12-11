import React from "react";
import searchYouTube from "../searchYouTube";

const Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onChange={props.handleChange}/>
    <button className="btn hidden-sm-down" onClick={props.searchClickHandle.bind(null,searchYouTube)}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

export default Search;
