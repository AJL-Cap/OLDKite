import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import fire from "../fire";

export default function SignUp(props) {
  const { register, handleSubmit, errors } = useForm();

  const [signupErr, setSignupErr] = useState(null);

  const [image, setImage] = useState(null)

  const handleImage = (evt) => {
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result)
    };
    reader.readAsDataURL(evt.target.files[0]);
  }

  const onSubmit = data => {
    console.log(data);
    fire.auth().createUserWithEmailAndPassword(data.email, data.password)
      .then(promise => {
        fire.database().ref(`players/${promise.user.uid}`).set({"nickname": data.nickname, "totalGamesPlayed": 0, "totalPoints": 0, "wins": 0, "profilePic": image})
        props.history.push("/");
      })
      .catch(err => {
        alert(err.message);
        //figure out how to display the error on render
        props.history.push("/signUp");
      });
  };

  //need to disaply error message for existing email

  return (
    //for registeration only
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        placeholder="Email"
        name="email"
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.email && "This field is required"}

      <label htmlFor="password">Password</label>
      <input
        type="text"
        placeholder="Password"
        name="password"
        ref={register({ required: true, minLength: 6 })}
      />
      {errors.password && "Must be at least 6 characters long"}

      <label htmlFor="nickname">Nickname</label>
      <input
        type="text"
        placeholder="Game lover"
        name="nickname"
        ref={register}
      />

      <label htmlFor="profilePic">Profile Picture</label>
      <input
        type="file"
        placeholder="upload a picture"
        name="profilePic"
        ref={register}
        onChange={handleImage}
      />
      <input type="submit" />
    </form>
  );
}

// auth.createUserWithEmailAndPassword(email, pass)
