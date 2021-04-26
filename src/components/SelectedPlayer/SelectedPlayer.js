import React from "react";
import "./SelectedPlayer.css";
import SpecialPlayer from "../SpecialPlayer/SpecialPlayer";

const TeamPlayer = (props) => {
  const player = props.teamPlayer;
  let total = player.reduce((total, player) => total + parseInt(player.salary), 0);
  return (
    <div>
      <div className="count-info">
        <h1 className="text-primary">Total Player: {player.length}</h1>
        <h5>Total budget:${total} </h5>
      </div>
      <div>
        <SpecialPlayer player={player}></SpecialPlayer>
      </div>
    </div>
  );
};

export default TeamPlayer;
