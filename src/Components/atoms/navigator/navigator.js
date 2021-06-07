import React from 'react'
import "./navigator.css";

function navigator(props) {
    return (
        <div className="whole-navigator flex center-2">
            <img className="navigator-icon" src={props.img}></img>
            <div className="navigator-text">{props.text}</div>
        </div>
    );
    }

export default navigator;
