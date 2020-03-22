import React from "react";

const WaitingRoom = props => {
  const handleClick = evt => {
    evt.preventDefault();
    //change game status to in progress and redirect to playing Game Component
  };
  return (
    <div>
      <div>
        <h1>Waiting for more players!</h1>
      </div>
      <div>
        <h3>Players:</h3>
        {/* iterate through players to display them */}
      </div>
      <div>
        <button onClick={handleClick}> Start Game </button>
      </div>
    </div>
  );
};

export default WaitingRoom;
