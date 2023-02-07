import React from "react";

class ControlledComponent extends React.Component {
  constructor(props) {
   super(props);

    this.state = {
      username: 'sneka',
      password: '55555',
      issuccess:false,
      isfalse:false,
    }
  }

  usernameOnchange = (event) => {
    console.log(event.target.value);
    this.setstate({
      username: event.target.value
    });
  }
  passwordOnchange = (event) => {
    console.log(event.target.value);
    this.setstate({
      password: event.target.value
    });
  }

  submit = (event) => {
    event.preventDefault();
    console.log(this.state.username, this.state.password);
  }

  render() {
    return (
      <div className="Controlled">
        <h3 className="mb-4">LOGIN FORM-CONTROLLED</h3>
        <form className="row g-3">
          <div className="col-auto">
            <label className="visually-hidden">
              Email
              </label>
            <input
              type="text"
              className="form-control"
              id="inputusername"
              placeholder="username"
              value={this.state.username}
              onchange={this.usernameOnchange}
            ></input>
          </div>
          <div className="col-auto">
            <label className="visually-hidden">
              Password
              </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              placeholder="Password"
              autocomplete="new-password"
              value={this.state.password}
              onchange={this.passwordOnchange}
            ></input>
          </div>
          <div className="col-auto">
            <button
              type="submit"
              className="btn btn-primary mb-3"
              onClick={this.submit}>
              submit
            </button>
          </div>
        </form>
        <Loginstatus
          issuccess={this.state.isSuccess}
          isfail={this.state.isfail}
        />
      </div>
    );
  }
}
function Loginstatus() {
  return <div>Loginsuccess</div>;
}
export default ControlledComponent;
