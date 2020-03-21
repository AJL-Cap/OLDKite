import React, { useState } from "react";
import { useForm } from "react-hook-form";
import fire from "../fire";
import { Route, Switch } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./Login";
import SignUp from "./SignUp";
import Players from "./Players";
import Home from "./Home";
import User from './User'

export default function Routes() {
  const [user, initialising, error] = useAuthState(fire.auth());

  //perhaps limit certain routes to logged in users (vs guests?)
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/players" component={Players} />
      <Route path="/profile"  render={props => <User profile={true} {...props} />} />
    </Switch>
  );
}
