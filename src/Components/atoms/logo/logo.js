import React from 'react'
import "./logo.css";
import slickLogo from "./../../../Assets/slick-logo.svg";

function logo() {
    return (
        <div className="whole-logo flex center-1 center-2">
            <div><img src={slickLogo} alt=""></img></div>
            <div className="title">Slick</div>
        </div>
    );
}

export default logo;
