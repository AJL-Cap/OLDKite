import React from "react";
import fire from "../fire";
import { useObjectVal } from "react-firebase-hooks/database";
import SessionPlayer from "./sessionPlayers";
import { Button } from "react-bootstrap";
import Loading from "./Loading";
import NotFound from "./NotFound";

const db = fire.database();
const gameSessions = db.ref("gameSessions");

const WaitingRoom = props => {
  //getting that session info
  const [sessionSnapshot, sessionLoading, sessionError] = useObjectVal(
    gameSessions
      .orderByChild("sessionCode")
      .equalTo(props.match.params.gameCode)
  );

  if (sessionLoading) return <Loading />;
  if (sessionError) return "Error";
  if (!sessionSnapshot) return <NotFound />;
  let session = Object.keys(sessionSnapshot);
  //back to lobby button functionality if a user is trying to access a game they're not in.
  const backToLobby = () => {
    props.history.push("/games");
  };
  const handleClick = () => {
    //updating that session status to playing
    gameSessions.child(session[0]).update({ status: "playing" }, function(err) {
      //still need send to the playing game component
      //error handling
      if (err) console.log("error switching game to playing");
      else console.log("success");
    });
  };
  //getting players from the session
  let players = Object.keys(sessionSnapshot[session].players);

  return (
    <>
      {players.includes(`${props.userId}`) ? (
        <div>
          <div className="row justify-content-center">
            <h1>Waiting for more players!</h1>
            <h2>{`Give your friends this code to invite them to your game: ${sessionSnapshot[session].sessionCode}`}</h2>
          </div>
          <div className="container">
            <div className="row">
              <h3 className="mx-auto">Players</h3>
            </div>
            <div className="row">
              {players.map(player => (
                <SessionPlayer player={player} key={player} />
              ))}
            </div>
            <div className="row justify-content-center">
              <Button variant="dark" onClick={handleClick}>
                Start Game
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="row justify-content-center">
          <h2>
            YOU ARE NOT IN THIS GAME. <br />
            CLICK THIS BUTTON TO HOST A GAME OR ENTER A DIFFERENT ROOM CODE!
          </h2>
          <Button variant="danger" onClick={backToLobby}>
            Return To Lobby
          </Button>
        </div>
      )}
    </>
  );
};

export default WaitingRoom;
