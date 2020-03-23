import React from "react";
import { useObjectVal } from "react-firebase-hooks/database";
import fire from "../fire";

const db = fire.database();
const playerRef = db.ref("players");

const SessionPlayers = props => {
  const [playerSnapshot, playerLoading, playerError] = useObjectVal(
    playerRef.child(props.player)
  );
  if (playerLoading) return "Loading";
  if (playerError) return "Error";
  return (
    <div>
      <h3>{playerSnapshot.nickname}</h3>
    </div>
  );
};

export default SessionPlayers;
