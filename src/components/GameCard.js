import React from 'react';
import { useObject } from 'react-firebase-hooks/database'

const GameCard = props => {
  const { gameRef, sessionRef, uid, history } = props
  const [game, loading, error] = useObject(gameRef);

  if (loading) return <p>Loading</p>;
  if (error) return <p>Error</p>;

  const handleClick = () => {

  }

  return (
    <div className="card" style={{ margin: "5%" }} >
      <div className="card-body" >
        <h2 className="card-title">title: {game.val().title}</h2>
        <p className="card-text">rules: {game.val().rules}</p>
        <button className="btn btn-primary" onClick={handleClick} >start new game</button>
      </div>
    </div>
  );
}

export default GameCard
