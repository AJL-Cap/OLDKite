import React from "react";
import fire from "../fire";
import { useObjectVal } from "react-firebase-hooks/database";
import SessionPlayer from "./SessionPlayers";
import { Button } from "react-bootstrap";
import NotFound from "./NotFound";

const db = fire.database();
const gameSessions = db.ref("gameSessions");

const WaitingRoom = props => {
  const code = props.match.params.code;
  //getting that session info
  const [sessionSnapshot, sessionLoading, sessionError] = useObjectVal(
    gameSessions.orderByChild("code").equalTo(code)
  );

  if (sessionLoading) return "";
  if (sessionError) return "Error";
  if (!sessionSnapshot) return <NotFound />;
  //getting the sessionID key
  let session = Object.keys(sessionSnapshot);
  //start game button
  const handleClick = () => {
    //updating that session status to playing
    gameSessions.child(session[0]).update({ status: "playing" }, function(err) {
      //error handling
      if (err) console.log("error switching game to playing");
      else console.log("success");
      //send to the playing game component
      props.history.push({
        pathname: `/games/${props.match.params.code}/${sessionSnapshot[session].gameId}`,
        state: { session }
      });
    });
  };
  //getting player ids from the session
  let players = Object.keys(sessionSnapshot[session].players);

  return (
    <>
      {players.includes(`${props.userId}`) ? (
        <div>
          <div className="row justify-content-center">
            <h1>Waiting for more players!</h1>
            <h2>{`Give your friends this code to invite them to your game: ${sessionSnapshot[session].code}`}</h2>
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
        <NotFound />
      )}
    </>
  );
};

export default WaitingRoom;
