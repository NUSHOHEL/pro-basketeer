import React from 'react';
import './Player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends, faPhoneSquare,faDollarSign, faMapMarkedAlt, faStreetView, faCalendarDay  } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    const {strPlayer, image, salary, country, phone, position, DOB }= props.player;
    return (
        <div className="player-card">
            <div className="player-info">
            <img src={image} alt='Profile pic'/>
            <h5>Name: {strPlayer}</h5>
            <p><FontAwesomeIcon icon={faPhoneSquare}/>  Phone: {phone}</p>
            <p><FontAwesomeIcon icon={faDollarSign}/> Income: {salary}</p>
            <p><FontAwesomeIcon icon={faMapMarkedAlt}/> Country: {country}</p>
            <p><FontAwesomeIcon icon={faStreetView}/> Position: {position}</p>
            <p><FontAwesomeIcon icon={faCalendarDay}/> Born: {DOB}</p>

            </div>
            
            <button  onClick={()=>props.addPlayer(props.player)}> <FontAwesomeIcon icon={faUserFriends} /> Add Player</button>
           
        </div>
    );
};


export default Player;