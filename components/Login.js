import React, { useState } from "react";
import { useForm } from "react-hook-form";
import fire from "../fire";

export default function Login() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  console.log(watch("example"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" placeholder="email" name="email" ref={register} />
      <input
        type="password"
        placeholder="password"
        name="password"
        ref={register({ required: true, min: 3 })}
      />

      <input type="submit" />
    </form>
  );
}
