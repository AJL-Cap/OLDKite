import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Routes from "./components/Routes";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes />
    </Router>
  );
}
