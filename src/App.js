import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

/// CSS | SCSS
import './App.scss';

/// LAYOUTS
import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";

// PAGES
import WhatWill from "./components/pages/home/what-will";
import DontKnow from "./components/pages/home/dont-know";
import HostingTypes from "./components/pages/home/hosting-types";


function App() {
  return (
    <Router>
      <Header />
      <WhatWill />
      <DontKnow />
      <HostingTypes />
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
