import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

/// CSS | SCSS
import './App.scss';

/// LAYOUTS
import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";

function App() {
  return (
    <Router>
      <Header />
      <Footer />
    </Router>
  );
}

export default App;
