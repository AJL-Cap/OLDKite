import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { useObjectVal } from "react-firebase-hooks/database";
import { useHistory, useParams } from "react-router-dom";
import fire from "../../fire"

const db = fire.database();
const gameSessions = db.ref("gameSessions");

export default function NHIEForm (props) {
  const { code } = useParams()
  // const history = useHistory()

  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, errors } = useForm();
  const [session, loading, error] = useObjectVal(gameSessions.orderByChild('code').equalTo(code))

  if (loading) return ""
  if (error) return "Error"

  let sessionId = Object.keys(session)

  const onSubmit = data => {
    db.ref(`gameSessions/${sessionId[0]}/players/${props.userId}`).update({response: data.response})

    //option 1:
    // history.push('new path?')
    //option 2:
    setSubmitted(true)
  };

 return (
   !submitted?
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Submit your response for this round</h1>
      <label htmlFor="response">Never have I ever...</label>
      <input type="text" name="response" placeholder="ex: peed in a pool" ref={register({ required: true})} />
      {errors.response && <p>You must enter a response!</p>}
      <input type="submit" />
    </form>
    :
    <div>Your response has been submitted</div>
    //render new component here
  );
}
