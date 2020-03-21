import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import fire from "../fire";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Navbar() {
  const [user, initialising, error] = useAuthState(fire.auth());

  return (
    <div>
      {user ? (
        <div>
          <Link to="/">Home</Link>
          <Link to="/players">Players</Link>
          <Link to="/profile">Profile</Link>
          <button onClick={()=>fire.auth().signOut()}>Sign out</button>
        </div>
      ) : (
        <div>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signUp">Sign up</Link>
        </div>
      )}
    </div>
  );
}
