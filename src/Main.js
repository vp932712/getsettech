import React, { Component } from 'react';
import Nav from "./Nav.js"
import Home from "./Home.js"
import ITServices from "./ITServices.js"
import AboutUs from "./AboutUs.js"
import CompanyImage from "./CompanyImage.js"



class Main extends Component {
  render() {
    return (
      <div>
        <CompanyImage />
        <Nav />
        <Home />
        <ITServices />
        <AboutUs />
      </div>
    );
  }
}

export default Main;
