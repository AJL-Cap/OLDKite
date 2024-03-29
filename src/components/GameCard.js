import React from "react";
import { useObject } from "react-firebase-hooks/database";
import fire from "../fire";
import makeRoomCode from "../roomCodes";

const db = fire.database();

const GameCard = props => {
  const { gameRef, gameId, uid, history } = props;
  const [game, loading, error] = useObject(gameRef);
  const code = makeRoomCode();

  if (loading) return "";
  if (error) return <p>Error</p>;

  const handleClick = () => {
    db.ref("gameSessions").push({
      code: code,
      gameId: gameId,
      status: "waiting",
      players: { [uid]: { host: true } }
    });
    history.push(`/games/${code}`);
  };

  return (
    <div className="card" style={{ margin: "5%" }}>
      <div className="card-body">
        <h2 className="card-title">title: {game.val().title}</h2>
        <p className="card-text">rules: {game.val().rules}</p>
        <button className="btn btn-primary" onClick={handleClick}>
          start new game
        </button>
      </div>
    </div>
  );
};

export default GameCard;
