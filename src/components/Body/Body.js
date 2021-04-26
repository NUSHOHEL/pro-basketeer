import React, { useState } from "react";
import { playerdata } from "../FakeData/fakedata";
import Player from "../Player/Player";
import TeamPlayer from "../SelectedPlayer/SelectedPlayer";
import "./Body.css";



const Body = () => {
  // eslint-disable-next-line no-unused-vars
  const [player, setPlayer] = useState(playerdata);
  const [teamPlayer, setTeamPlayer] = useState([]);

  console.log(player)
  
  const addPlayer = (player) => {
    if (teamPlayer.indexOf(player) === -1) {
      const newPlayer = [...teamPlayer, player];
      setTeamPlayer(newPlayer);
    } else {
      alert("already added");
    }
  };

  return (
    <div className="player-container">
      <div className="random-player">
        {player?.map((player) => (
          <Player addPlayer={addPlayer} player={player} key={player.id}></Player>
        ))}
      </div>
      <div className="selected-player">
        <TeamPlayer teamPlayer={teamPlayer}></TeamPlayer>
      </div>
    </div>
  );
};

export default Body;
