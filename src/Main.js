import React, { Component } from 'react';
import Nav from "./Nav.js"
import Home from "./Home.js"
import ITServices from "./ITServices.js"
import AboutUs from "./AboutUs.js"




class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Home />
        <ITServices />
        <AboutUs />
      </div>
    );
  }
}

export default Main;
