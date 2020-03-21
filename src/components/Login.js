import React, { useState } from "react";
import { useForm } from "react-hook-form";
import fire from "../fire";

export default function Login(props) {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = data => {
    console.log(data);
    fire.auth().signInWithEmailAndPassword(data.email, data.password);
    props.history.push('/')
  };

  //need to display error for wrong email & password combi
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" placeholder="email" name="email" ref={register} />
      <input
        type="password"
        placeholder="password"
        name="password"
        ref={register({ required: true, minLength: 6 })}
      />
      <input type="submit" />
    </form>
  );
}
