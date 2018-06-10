import React, { Component } from 'react';
import Nav from "./Nav.js"
import Home from "./Home.js"
import ITServices from "./ITServices.js"
import AboutUs from "./AboutUs.js"
import CompanyImage from "./CompanyImage.js"
import Footer from "./Footer.js"
import Contact from "./Contact.js"
import { Route } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div>
        <CompanyImage />
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={AboutUs} />
        <Route path="/contact" component={Contact} />
        <Route path="/itServices" component={ITServices} />
        <Footer />
      </div>
    );
  }
}

export default App;
