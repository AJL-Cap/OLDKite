import React from 'react'
import { useForm } from 'react-hook-form'
import { useObject } from 'react-firebase-hooks/database'
import fire from '../fire'

const db = fire.database()

const RoomCodeForm = (props) => {
  const { uid, history } = props
  const { register, handleSubmit, errors } = useForm()
  const [session, loading, error] = useObject(db.ref("gameSessions").orderByChild('code').equalTo('GAME'))

  if (loading) return <div>...</div>

  const room = Object.entries(session.val())[0]
  const key = room[0]
  const { code, players, gameId } = room[1]
  const playerCopy = {...players}

  const sessionRef = db.ref("gameSessions/" + key + "/players")

  const onSubmit = data => {
    if (data.code == code) {
      sessionRef.set({...playerCopy, [uid]: {points: 0}})
    }
    history.push(`/games/${gameId}/${code}`)
  };

  return (
    <div className="card" style={{ margin: "5%" }} >
      <div className="card-body text-primary" >
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="game code" name="code" ref={register({required: true, maxLength: 4})} />
          <br />
          { error || errors.code && <span className="alert-warning">incorrect room code</span> }
          <br />
          <button type="sumbit" className="btn btn-primary">join game</button>
        </form>
      </div>
    </div>
  )
}

export default RoomCodeForm
