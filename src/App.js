// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm";

import Class from "./components/Hex/Class";

function App() {
  return (
    <>
      <Navbar title="Karamveer Singh" home="veer" />

      {/* <Navbar/> */}

      {/* textform */}
      <div className="container">
        <TextForm title="Enter the text to analyze below" />
      </div>
      {/* ........textform */}

    </>
  );
}

export default App;
