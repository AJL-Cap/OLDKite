import React from "react";
import fire from "../fire";
import { Route, Switch } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./Login";
import SignUp from "./SignUp";
import Players from "./Players";
import Home from "./Home";
import Profile from "./Profile";
import GamePage from "./GamePage";
import WaitingRoom from "./WaitingRoom";
import NotFound from "./NotFound";
import Loading from "./Loading";
import NHIE from "./NHIE";

export default function Routes() {
  const [user, initialising, error] = useAuthState(fire.auth());

  if (initialising) {
    return (
      <div>
        <Loading />
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
          <Route exact path="/games" component={GamePage} />
          <Route
            exact
            path="/games/:code"
            render={props => <WaitingRoom userId={user.uid} {...props} />}
          />
          <Route
            path="/games/:code/1"
            render={props => <NHIE userId={user.uid} {...props} />}
          />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      )}
      <Route component={NotFound} />
    </Switch>
  );
}
