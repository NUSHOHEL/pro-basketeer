import React from "react";
import "./SpecialPlayer.css";

const SpecialPlayer = (props) => {
  const player = props.player;

  return (
    <div>
      {player.map((player) => (
        <div className="special-card">
          <div>
            <img src={player.img} alt="" />
          </div>
          <div className="short-info">
            <h5>Name: {player.name} </h5>
            <h6>Salary: {player.salary}</h6>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpecialPlayer;
