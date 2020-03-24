import React, { useState } from "react";
import NHIEForm from "./NHIEForm";
import fire from "../../fire";
import { useObjectVal } from "react-firebase-hooks/database";

const db = fire.database();
const gameRef = db.ref('gameSessions')

const NHIE = props => {
  const sessionId = props.location.state.session[0];

  const [session, loading, error] = useObjectVal(gameRef.child(sessionId))

  const [form, setForm] = useState(false);

  return !form ? (
    <div>
      <button type="button" onClick={() => setForm(true)}>
        Response Form
      </button>
    </div>
  ) : (
    <NHIEForm {...props}/>
  );
};

export default NHIE;
