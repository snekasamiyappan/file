import React from "react";
class MountingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
    };
  }
  //static getDerivedStateFromProps(props,state){
  //   return{
  //       color:props.favcolor,
  //    }
  // }
  render() {
    return <div>My Fav color is {this.state.color}</div>;
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        color: "purple",
      });
    }, 5000);
  }
}
export default MountingComponent;
