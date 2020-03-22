import React from 'react';
import fire from './fire'
import { useList } from 'react-firebase-hooks/database'
import GameCard from './components/GameCard';
import 'bootstrap/dist/css/bootstrap.min.css'

const db = fire.database()
const gamesRef = db.ref("games")

const App = () => {

  const [games, loading, error] = useList(gamesRef);

  if (loading) return <p>Loading</p>;
  if (error) return <p>Error</p>;

  return (
    <div className="App">
      <div className="jumbotron text-center" >
        <h1>Games 🌬🪁🌤 </h1>
      </div>
      {games.map(game => <GameCard key={game.key} gameRef={game.ref} />)}
    </div>
  );
}

export default App;
