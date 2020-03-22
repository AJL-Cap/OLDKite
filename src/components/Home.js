import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useObject, useObjectVal } from "react-firebase-hooks/database";
import fire from "../fire";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home({ userId }) {
  const [player, loading, error] = useObjectVal(
    fire.database().ref(`players/${userId}`)
  );

  if (loading) return <p>loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div>
      <h1>🪁 Kite 🪁</h1>
      <p>near, far, wherever we are... </p>
      <h3>Welcome {player && player.nickname}!</h3>
    </div>
  );
}
