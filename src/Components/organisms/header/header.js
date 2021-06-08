import React from 'react';
import "./header.css";
import {ReactComponent as NotificationLogo} from "./../../../Assets/general/notification.svg";

function header(props) {
    return (
        <div className="header flex center-2">
            <div>
                <div className="awesome-text">{props.upperText}</div>
                <div className="welcome-text">{props.lowerText}</div>
            </div>
            <div>
                <NotificationLogo></NotificationLogo>
            </div>
        </div>
    );
}

export default header;