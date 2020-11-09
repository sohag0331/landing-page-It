import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./componenets/pages/Footer/Footer";
import Home from "./componenets/pages/HomePage/Home";
import Services from "./componenets/pages/Services/Services";
import Features from "./componenets/pages/Features/Features";
import TestPage from "./componenets/pages/TestPage/TestPage";
import Navbar from "./componenets/pages/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/features" component={Features} />
        <Route path="/test-page" component={TestPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
