import React from 'react';
import { useObject } from 'react-firebase-hooks/database'

const GameCard = props => {
  const { gameRef } = props
  const [game, loading, error] = useObject(gameRef);

  if (loading) return <p>Loading</p>;
  if (error) return <p>Error</p>;

  return (
    <div className="card" style={{ width: '40%', margin: "5%" }} >
      <div className="card-body" >
        <h2 className="card-title">title: {game.val().title}</h2>
        <p className="card-text">rules: {game.val().rules}</p>
      </div>
    </div>
  );
}

export default GameCard
