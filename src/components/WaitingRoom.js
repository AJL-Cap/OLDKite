import React from "react";
import fire from "../fire";
import { useList, useObject, useListKeys } from "react-firebase-hooks/database";
import { Redirect } from "react-router-dom";

const db = fire.database();
const gameSessions = db.ref("gameSessions");
const WaitingRoom = props => {
  // console.log(props.match.params);
  const [sessionSnapshot, sessionloading, sessionError] = useListKeys(
    gameSessions.child(props.match.params.sessionId).child("players")
  );
  if (sessionloading) return "loading";
  const backToLobby = () => {
    props.history.push("/games");
  };
  const handleClick = evt => {
    evt.preventDefault();
    //change game status to in progress and redirect to playing Game Component
  };
  return sessionSnapshot.includes(props.userId) ? (
    <div>
      <div>
        <h1>Waiting for more players!</h1>
      </div>
      <div>
        <h3>Players:</h3>
        {/* iterate through players to display them */}
      </div>
      <div>
        <button onClick={handleClick}> Start Game </button>
      </div>
    </div>
  ) : (
    <>
      <h2>
        YOU ARE NOT IN THIS GAME. CLICK THIS BUTTON TO HOST A GAME OR ENTER A
        DIFFERENT ROOM CODE!
      </h2>
      <button onClick={backToLobby}>Return To Lobby</button>
    </>
  );
};

export default WaitingRoom;
