import React from "react";
import fire from "../fire";
import { useObjectVal } from "react-firebase-hooks/database";
import SessionPlayers from "./sessionPlayers";

const db = fire.database();
const gameSessions = db.ref("gameSessions");

const WaitingRoom = props => {
  //getting that session info
  const [sessionSnapshot, sessionLoading, sessionError] = useObjectVal(
    gameSessions.child(props.match.params.sessionId)
  );
  if (sessionLoading) return "loading";
  if (sessionError) return "Error";
  if (!sessionSnapshot) return "This game doesn't exist";
  //back to lobby button functionality if a user is trying to access a game they're not in.
  const backToLobby = () => {
    props.history.push("/games");
  };
  const handleClick = () => {
    //updating that session status to playing
    gameSessions
      .child(props.match.params.sessionId)
      .update({ status: "playing" }, function(err) {
        //still need send to the playing game component
        //error handling
        if (err) console.log("error switching game to playing");
        else console.log("success");
      });
  };
  //getting players from the session
  let players = Object.keys(sessionSnapshot.players);

  return (
    <>
      {players.includes(`${props.userId}`) ? (
        <div>
          <div>
            <h1>Waiting for more players!</h1>
            <h2>{`Give your friends this code to invite them to your game: ${sessionSnapshot.sessionCode}`}</h2>
          </div>
          <div>
            <h3>Players:</h3>
            {players.map(player => (
              <SessionPlayers player={player} key={player} />
            ))}
          </div>
          <div>
            <button onClick={handleClick}> Start Game </button>
          </div>
        </div>
      ) : (
        <>
          <h2>
            YOU ARE NOT IN THIS GAME. CLICK THIS BUTTON TO HOST A GAME OR ENTER
            A DIFFERENT ROOM CODE!
          </h2>
          <button onClick={backToLobby}>Return To Lobby</button>
        </>
      )}
    </>
  );
};

export default WaitingRoom;
