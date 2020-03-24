import React from "react";
import PlayerInfo from "./PlayerInfo";
import NHIEForm from "./NHIEForm";
import fire from "../../fire";
import { useObjectVal } from "react-firebase-hooks/database";
const db = fire.database();
const gameSessions = db.ref("gameSessions");

const NHIE = props => {
  const sessionId = props.location.state.session[0];
  const [session, loading, error] = useObjectVal(gameSessions.child(sessionId));
  if (loading) return "";
  if (error) return "Error";
  let players = Object.keys(session.players);
  return (
    <div>
      <h1>Hello World from NHIE</h1>
      <NHIEForm {...props} />
      <div className="row" id="playerDisplayPoints">
        {players.map(key => {
          return (
            <PlayerInfo
              points={session.players[key].points}
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
