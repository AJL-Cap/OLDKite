import React from "react";
import PlayerInfo from "./PlayerInfo";
import fire from "../../fire";
import { useObjectVal } from "react-firebase-hooks/database";
const db = fire.database();
const gameSessions = db.ref("gameSessions");

const NHIE = props => {
  const [sessionSnapshot, sessionLoading, sessionError] = useObjectVal(
    gameSessions.child(props.location.state.session[0])
  );
  // const [playersSnapshot, playersLoading, playersError] = useList(
  //   gameSessions.
  // )
  if (sessionLoading) return "";
  if (sessionError) return "Error";
  let players = Object.keys(sessionSnapshot.players);
  return (
    <div>
      <h1>Hello World from NHIE</h1>
      <div className="row" id="playerDisplayPoints">
        {players.map(key => {
          return (
            <PlayerInfo
              points={sessionSnapshot.players[key].points}
              key={key}
              id={key}
            />
          );
        })}
      </div>
    </div>
  );
};
export default NHIE;
