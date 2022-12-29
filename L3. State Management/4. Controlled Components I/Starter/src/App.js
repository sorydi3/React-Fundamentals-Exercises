import logo from "./logo.svg";
import React from "react";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("React");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="container">
        <input
          type="text"
          placeholder="Say Something"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <p className="echo">Echo:</p>
        <p>{searchTerm}</p>
      </div>
    </div>
  );
};

export default App;
