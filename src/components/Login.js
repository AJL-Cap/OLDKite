import React, { useState } from "react";
import { useForm } from "react-hook-form";
import fire from "../fire";

export default function Login(props) {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = data => {
    fire
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .catch(err => {
        alert(err.message);
      });
    props.history.push("/");
  };

  //need to display error for wrong email & password combination
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Log In</h1>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" ref={register} />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        ref={register({ required: true, minLength: 6 })}
      />
      <input type="submit" />
    </form>
  );
}
