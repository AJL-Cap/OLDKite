import React, { useState } from "react";
import { useForm } from "react-hook-form";
import fire from "../fire";

// const auth = fire.auth()

// auth.signInWithEmailAndPassword(email, pass)

// auth.createUserWithEmailAndPassword(email, pass)

// auth.onAuthStateChanged(firebaseUser => {})

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => fire.auth().signOut()}>Sign out</button>
    </>
  )
}
