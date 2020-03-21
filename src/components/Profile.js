import React, { useEffect, useState } from "react";
import { useObject } from "react-firebase-hooks/database";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import fire from "../fire";

export default function Profile({ userId }) {
  const playerRef = fire.database().ref(`players/${userId}`);

  const [player, loading, err] = useObject(playerRef);

  if (loading) {
    return <div>loading...</div>;
  }
  if (err) {
    return <div>error!</div>;
  }
  if (player) {
    return (
      <div>
        <div>Nickname: {player.val().nickname}</div>
        <div>Total Points: {player.val().totalPoints}</div>
        <div>Total Wins: {player.val().wins}</div>
        <div>Total Games: {player.val().totalGamesPlayed}</div>
      </div>
    );
  }
}
