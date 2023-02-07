import React from "react";
class UpdatingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
    };
  }
  // static getDerivedStateFromProps(props, state) {
  //  return {
  //    color: props.favcolor,
  //  };
  // }
  shouldComponentUpdate() {
    return true;
  }
  changecolor = () => {
    this.setState({
      color: "yellow",
    });
  };
  render() {
    return (
      <div>
        <div>My Fav color is {this.state.color}</div>
        <button className="btn btn-primary" onclick={this.changecolor}>
          changecolor
        </button>
        <div id="prevcolor"></div>
        <div id="currentcolor"></div>
      </div>
    );
  }
  getSnapshotBeforeUpdate(prevProps, prevstate) {
    document.getElementById("prevcolor").innerHTML =
      "My Prev fav color is" + prevstate.color;
    return null;
  }
  componentDidUpdate() {
    document.getElementById("currentcolor").innerHTML =
      "My current fav color is" + this.state.color;
  }
}
export default UpdatingComponent;
