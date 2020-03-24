import React, { useState } from "react";
import NHIEForm from "./NHIEForm";

const NHIE = props => {
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
