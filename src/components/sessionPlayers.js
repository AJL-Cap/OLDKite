import React from "react";
import { useObject } from "react-firebase-hooks/database";
import fire from "../fire";
import { Card } from "react-bootstrap";

const db = fire.database();
const playerRef = db.ref("players");

const SessionPlayer = props => {
  console.log(props)
  const [playerSnapshot, playerLoading, playerError] = useObject(
    playerRef.child(props.player)
  );
  if (playerLoading) return "";
  if (playerError) return "Error";
  return (
    <div className="m-3">
      <Card style={{ width: "18rem" }} bg="dark" text="light">
        {playerSnapshot.profilePic ? (
          <Card.Img variant="top" src={playerSnapshot.profilePic} />
        ) : (
          <Card.Img variant="top" src="" />
        )}
        <Card.Body>
        {props.host && <h1>Host</h1>}
          <Card.Title>{playerSnapshot.val().nickname}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SessionPlayer;
