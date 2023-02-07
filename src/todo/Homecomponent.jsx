import React from "react-router-dom";

function HomeComponent(props) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <h5>welcome to our india</h5>
        {/*<button className="btn btn-primary mt-5">Go to list</button>*/}
        <div>To view the list,<Link className="btn btn-primary mt-5" to="/list"></Link>click here</div>
      </div>
    </div>
  );
}

export default HomeComponent;
