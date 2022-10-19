import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import NameWorkspace from "./components/Name_Workspace";
import Header from "./components/Header";
// import Planning from "./components/Planning";
// import Congo from "./components/Congo";
import Name from "./components/Name";
import Workspace from "./components/Workspace";
import React, { useState } from "react";
import Button from "./components/Button";

export const Details = React.createContext();

function App() {
  const [next, setNext] = useState(false);
  return (
    <div className="eden-content-container">
      <Header />
      <div> {next ? <Workspace /> : <Name props={setNext} />} </div>
      {/* <div>
        {next === 0 ? (
          <Name props={setNext} />
        ) : next === 1 ? (
          <Workspace props={setNext} />
        ) : next === 2 ? (
          <Planning props={setNext} />
        ) : (
          <Congo />
        )}
        </div> */}
      <Button props={setNext} />
    </div>
  );
}

export default App;
