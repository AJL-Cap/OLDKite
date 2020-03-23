import React, {useEffect} from 'react'
import fire from '../fire'
import { useObject } from 'react-firebase-hooks/database'

const db = fire.database()

const RoomCodeSubmit = (props) => {
  const { uid, history, formCode } = props
  const [session, loading, error] = useObject(db.ref("gameSessions").orderByChild('code').equalTo(formCode)); // finds game session with same code

  useEffect(() => {
    if(session) {
      const room = Object.entries(session.val())[0] // session.val returns a nested object with the target object inside. since i don't know what the sessionID is at this point, i'm calling object.entries to give me an array of tuples of the key-value pairs, and since I only want the first one, I found the tuple at index 0
      const key = room[0] // and now here's the session key
      const sessionRef = db.ref("gameSessions/" + key + "/players") // using that session key, i can make a reference to the specific session players
      const { code, players, gameId } = room[1] // destructuring the data that came with the initial object
      const playerCopy = {...players}
      sessionRef.set({...playerCopy, [uid]: {points: 0}}) // setting session players in the db to the old players plus the new one
      history.push(`/games/${code}`) // redirecting to the game page
    }
  }, [history, session, uid]);

  if (loading) return <div>loading...</div>
  if (error) return <div className="alert-warning" >incorrect room code</div>
  return <></>
}

export default RoomCodeSubmit
