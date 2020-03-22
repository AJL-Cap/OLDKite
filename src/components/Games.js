import React from 'react'
import fire from './fire'
import { useList } from 'react-firebase-hooks/database'
import GameCard from './components/GameCard'
// import { useForm } from "react-hook-form" // for adding the room code input
// import { useAuthState } from "react-firebase-hooks/auth" // for adding players to room at init

const db = fire.database()
const gamesRef = db.ref("games")

const Games = () => {

  const [games, loading, error] = useList(gamesRef);

  if (loading) return <p>Loading</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      <div className="jumbotron text-center" >
        <h1>Games 🌬🪁🌤 </h1>
      </div>
      {games.map(game => <GameCard key={game.key} gameRef={game.ref} />)}
    </div>
  );
}
