import React, { useState } from "react";
import { useForm } from "react-hook-form";
import fire from "../fire";
import { Route, Switch } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./Login";
import SignUp from "./SignUp";
import Players from "./Players";
import Home from "./Home";
import Profile from "./Profile";
import WaitingRoom from "./WaitingRoom";

export default function Routes() {
  const [user, initialising, error] = useAuthState(fire.auth());

  if (initialising) {
    return (
      <div>
        <p>loading...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <Switch>
      {user ? (
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Home userId={user.uid} {...props} />}
          />
          <Route path="/players" component={Players} />
          <Route
            path="/profile"
            render={props => <Profile userId={user.uid} {...props} />}
          />
          <Route
            path="/games/:gameCode"
            render={props => <WaitingRoom userId={user.uid} {...props} />}
          />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      )}
    </Switch>
  );
}
