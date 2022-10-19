import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import NameWorkspace from "./components/Name_Workspace";
import Progress from "./components/Progress";
import Planning from "./components/Planning";
import Congo from "./components/Congo";
import Name from "./components/Name";
import Workspace from "./components/Workspace";
import React, { useState } from "react";

export const Details = React.createContext();
const logo = "./images/eden-logo.png";

function App() {
  const [next, setNext] = useState(0);

  const updateNext = () => {
    console.log("Updating next value");
    setNext(next + 1);
  };

  return (
    <div className="eden-content-container">
      <img src={logo} alt="Eden Logo" className="logo"></img>
      <Progress currentIndex={next} />
      <div className="component-container">
        {next === 0 ? (
          <Name />
        ) : next === 1 ? (
          <Workspace />
        ) : next === 2 ? (
          <Planning />
        ) : (
          <Congo />
        )}
      </div>
      <button
        type=""
        className="create-workspace"
        onClick={() => {
          updateNext();
        }}
      >
        {next > 2 ? "Launch Eden" : "Create workspace"}
      </button>
    </div>
  );
}

export default App;

/*
First component - Name
Second component - Workspace
Third component - Planning
Fourth component - Congo

*/
