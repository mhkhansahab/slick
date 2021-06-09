import React from 'react';
import "./proCard.css";
import polygonOne from "./../../../Assets/nav-icons/polygon1.svg";
import polygonTwo from "./../../../Assets/nav-icons/polygon2.svg";

function proCard() {
    return (
        <div className="pro-card">
            <div className="pro-text">Boost Your <img src={polygonOne} alt=""></img></div>
            <div className="pro-text">Sales Fast</div>
            <div><img src={polygonTwo} alt=""></img></div>
            <div className="pro-btn">Explore Pro</div>
        </div>
    );
}

export default proCard;
