import React from "react";
import "../counter/counter.css";

class counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  render() {
    return (
      <div className="counterApp">
        <button className="incButton btn btn-danger" onClick={this.decrement}>
          - {this.props.inc}
        </button>
        <label className="incValue">{this.state.counter}</label>
        <button className="incButton btn btn-success" onClick={this.increment}>
          +{this.props.inc}
        </button>
      </div>
    );
  }
  decrement = () => {
    console.log("Button Triggered");
    this.setState({
      counter: this.state.counter - this.props.inc,
    });
  };
}
export default counter;

