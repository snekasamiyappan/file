import React from "react";
//import LoginComponent from "./Logincomponent";
//import HomeComponent  from "./Homecomponent";
import ListComponent from "./listcomponent";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import ErrorComponent from "./Errorcomponent";
//import withParam from "./withParam";

class  TodoComponent extends React.Component {
    
  render(){
    return(
      <div className="todo">
        <ListComponent />
        </div>
    );
  }
}

export default TodoComponent;
      
