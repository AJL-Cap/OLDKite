import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useObjectVal } from "react-firebase-hooks/database";
import { useHistory, useParams } from "react-router-dom";
import fire from "../../fire";

const db = fire.database();

export default function NHIEForm(props) {
  const sessionId = props.location.state.session[0]
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  const playerRef = db.ref(
    `gameSessions/${sessionId}/players/${props.userId}`
  );

  useEffect(() =>{
    playerRef.update({responding: true})
  },[])

  const onSubmit = data => {
    playerRef.update({ response: data.response, responding: false });
    //option 1:
    // history.push('new path?')
    //option 2:
    setSubmitted(true);
  };

  return !submitted ? (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Submit your response for this round</h1>
      <label htmlFor="response">Never have I ever...</label>
      <input
        type="text"
        name="response"
        placeholder="ex: peed in a pool"
        ref={register({ required: true })}
      />
      {errors.response && <p>You must enter a response!</p>}
      <input type="submit" />
    </form>
  ) : (
    <div>Your response has been submitted</div>
    //render new component here
  );
}
