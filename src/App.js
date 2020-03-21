import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import fire from "./fire";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Routes from "./components/Routes";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes />
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      </div>
    </Router>
  );
}
