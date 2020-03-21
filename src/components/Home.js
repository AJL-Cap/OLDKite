import React, { useState } from "react";
import { useForm } from "react-hook-form";
import fire from "../fire";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {
  const [user, initialising, error] = useAuthState(fire.auth());

  return (
    <div>
      <h1>🪁 Kite 🪁</h1>
      <p>near, far, wherever we are.. </p>
      <p>Welcome {user && user.email}!</p>
    </div>
  );
}
