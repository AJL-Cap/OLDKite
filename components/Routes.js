import React, { useState } from "react";
import { useForm } from "react-hook-form";
import fire from "../fire";
import { BrowerRouter as Router, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from './Home'

export default function Routes() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
      </div>
    </Router>
  );
}
