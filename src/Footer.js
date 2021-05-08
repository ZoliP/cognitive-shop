import React, { Component } from "react";
class Footer extends Component {
  render() {
    const date = new Date().getFullYear();
    return (
      <div className="bg-dark">
        <div className="container">
          <h6 className="h6 text-white">
            <i className="text-white fa fa-copyright pt-4 pb-4" />
            &nbsp;{date} <span className="text-white">COGNITIVE CREATORS</span>
          </h6>
        </div>
      </div>
    );
  }
}

export default Footer;
