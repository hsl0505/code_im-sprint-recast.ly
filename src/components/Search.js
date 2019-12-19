import React from "react";
// import searchYouTube from "../searchYouTube";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // currentInput: "",
      reset: 0
    };
    this.currentInput = "";

    this.handleChange = this.handleChange.bind(this);
    this.onSearchClickHandle = this.onSearchClickHandle.bind(this);
  }

  handleChange() {
    const target = event.target;
    if (target.value.includes('"')) {
      return null;
    }
    this.currentInput = target.value;
    // this.setState({
    //   currentInput: target.value,
    // });
  }

  onSearchClickHandle() {
    this.props.searchClickHandle(this.currentInput);
    this.currentInput = "";
    this.setState({
      reset: this.state.reset + 1
    });
  }
  // 다 입력만 다했을대 스테이트랑 클릭을 햇을때
  // shouldComponentUpdate(nextProps, nextState) {
  //   return !(nextState.isInput === true)
  // }

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          key={this.state.reset.toString()}
          className="form-control"
          type="text"
          onChange={this.handleChange}
          // value={this.state.currentInput}
        />
        <button
          className="btn hidden-sm-down"
          onClick={this.onSearchClickHandle}
        >
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

// const Search = props => {
//   // console.log("search render")
//   return
// }

export default Search;
