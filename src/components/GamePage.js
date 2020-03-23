import React from 'react'
import fire from '../fire'
import { useList } from 'react-firebase-hooks/database'
import GameCard from './GameCard'
import RoomCodeForm from './RoomCodeForm'
import {Container,Row,Col} from 'react-bootstrap'
import { useAuthState } from "react-firebase-hooks/auth"
import firebase from 'firebase'

const db = fire.database()
const gamesRef = db.ref("games")
const sessionRef = db.ref("gameSessions")

const GamePage = props => {
  const [user, loadingUser, errorUser] = useAuthState(firebase.auth());
  const [games, loading, error] = useList(gamesRef)

  if (loading || loadingUser) return <p>Loading</p>
  if (error || errorUser) return <p>Error</p>

  return (
    <div>
      <div className="jumbotron text-center" >
        <h1>Games 🌬🪁🌤 </h1>
      </div>
      <Container fluid>
        <Row>
          <Col>{games.map(game => <GameCard key={game.key} gameRef={game.ref} sessionRef={sessionRef} uid={user.uid} history={props.history} />)}</Col>
          <Col><RoomCodeForm sessionRef={sessionRef} uid={user.uid} history={props.history} /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default GamePage
