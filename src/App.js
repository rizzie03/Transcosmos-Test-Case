import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Body from "./home/Body";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Body />
      <Footer />
    </>
  );
}

export default App;
