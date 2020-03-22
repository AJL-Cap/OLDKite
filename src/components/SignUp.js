import React, { useState } from "react";
import { useForm } from "react-hook-form";
// import { useAuthState } from "react-firebase-hooks/auth";
import fire from "../fire";

export default function SignUp(props) {
  const { register, handleSubmit, errors } = useForm();

  //thinking of using this for displaying error..:
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
        //for now, using alert. but need to figure out how to display err.message on render instead
        props.history.push("/signUp");
      });
  };

  //remember: need to disaply error message for existing email or invalid email format
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign Up</h1>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.email && <p>This field is required</p>}

      <label htmlFor="password">Password</label>
      <input
        type="text"
        name="password"
        ref={register({ required: true, minLength: 6 })}
      />
      {errors.password && <p>Must be at least 6 characters long</p>}

      <label htmlFor="nickname">Nickname</label>
      <input
        type="text"
        placeholder="Ex: Game lover"
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
