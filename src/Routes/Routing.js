import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Routing = () => {
  return (
    <Router>
      <Header />
      {/* <Footer /> */}
    </Router>
  );
};

export default Routing;
