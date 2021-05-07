import React, { Component } from "react";
import logo from "./logoCC.png";
import "./Login.css";

class Login extends Component {
  render() {
    const { UserList } = this.props;
    let email = "";
    const userFound = false;
    console.log("the users", { UserList });
    return (
      <div className="login">
        <div className="col-sm-4">
          <img src={logo} alt="CCLogo.png"></img>
          <form className="loginBox">
            <div className="form-group">
              <h3 className="h3">Welcome!</h3>
              {!email && (
                <>
                  <label className="emailInput">
                    Please fill in your email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    required
                  ></input>
                </>
              )}
              {!userFound && email && (
                <>
                  <label type="hidden" className="nameInput">
                    Please fill in your name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                  ></input>
                  <label className="password">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    required
                  ></input>
                  <label className="password">Confirm password:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="passwordConfirm"
                    required
                  ></input>
                </>
              )}
              {userFound && email && (
                <>
                  <label className="password">Password:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="password"
                    required
                  ></input>
                </>
              )}
              <br />
              <button type="submit" className="btn btn-primary btn-block">
                Continue
              </button>
              <small id="emailHelp" className="form-text ">
                Don't have an account yet? <br />
                You can create one in the next step.
              </small>
            </div>
          </form>
          <a href="/help">Need help?</a>
        </div>
      </div>
    );
  }
}

export default Login;
