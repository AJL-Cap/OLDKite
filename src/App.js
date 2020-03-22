import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Routes from "./components/Routes";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout";

export default function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Layout>
        <Router>
          <Routes />
        </Router>
      </Layout>
    </React.Fragment>
  );
}
