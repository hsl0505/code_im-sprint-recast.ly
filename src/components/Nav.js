/* eslint-disable max-len */
import React from "react";
import Search from "./Search";

const Nav = props => (
  <nav className="navbar">
    <div className="col-md-6 col-md-offset-3">
      <Search handleChange={props.handleChange} searchClickHandle={props.searchClickHandle}/>
    </div>
  </nav>
);

export default Nav;
