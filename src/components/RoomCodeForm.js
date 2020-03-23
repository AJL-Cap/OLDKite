import React from 'react'
import { useForm } from 'react-hook-form'
import fire from '../fire'

const db = fire.database()

const RoomCodeForm = (props) => {
  const { uid, history } = props
  const { register, handleSubmit, errors } = useForm()

  let session = {}
  const onSubmit = data => {
    db.ref("gameSessions").orderByChild('code').equalTo(data.code).on("value", function (snapshot) {
      session = snapshot.val()
    });
    const room = Object.entries(session)[0]
    const key = room[0]
    const sessionRef = db.ref("gameSessions/" + key + "/players")
    const { code, players, gameId } = room[1]
    const playerCopy = {...players}
    sessionRef.set({...playerCopy, [uid]: {points: 0}})
    history.push(`/games/${gameId}/${code}`)
  };

  return (
    <div className="card" style={{ margin: "5%" }} >
      <div className="card-body text-primary" >
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="game code" name="code" ref={register({required: true, maxLength: 4})} />
          <br />
          { errors.code && <span className="alert-warning">incorrect room code</span> }
          <br />
          <button type="sumbit" className="btn btn-primary">join game</button>
        </form>
      </div>
    </div>
  )
}

export default RoomCodeForm
