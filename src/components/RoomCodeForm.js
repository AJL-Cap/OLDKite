import React from 'react'
import { useForm } from 'react-hook-form'
import { useObject } from 'react-firebase-hooks/database'

const RoomCodeForm = (props) => {
  const {sessionRef, uid} = props
  const { register, handleSubmit, errors } = useForm()
  const [session, loading, error] = useObject(sessionRef.orderByChild('code').equalTo('GAME'))

  if (loading) return <div>...</div>

  let { code, players } = Object.values(session.val())[0]

  const onSubmit = data => {
    if (data.code == code) {
      players = {...players, [uid]: {points: 0}}
    }
    console.log(players)
  };

  return (
    <div className="card border-primary mb-3" style={{ margin: "5%" }} >
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
