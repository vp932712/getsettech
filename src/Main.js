import React, { Component } from 'react';
import Nav from "./Nav.js"
import Home from "./Home.js"
import ITServices from "./ITServices.js"
import AboutUs from "./AboutUs.js"
import CompanyImage from "./CompanyImage.js"
import Footer from "./Footer.js"


class Main extends Component {
  render() {
    return (
      <div>
        <CompanyImage />
        <Nav />
        <Home />
        <ITServices />
        <AboutUs />
        <Footer />
      </div>
    );
  }
}

export default Main;
