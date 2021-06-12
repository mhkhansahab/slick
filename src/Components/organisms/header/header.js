import React from 'react';
import "./header.css";
import {ReactComponent as NotificationLogo} from "./../../../Assets/general/notification.svg";
import Logo from "./../../atoms/logo/logo";

function header(props) {
    return (
        <>
        <div className="header flex center-2 desktop-header">
            <div>
                <div className="awesome-text">{props.upperText}</div>
                <div className="welcome-text">{props.lowerText}</div>
            </div>
            <div>
                <NotificationLogo></NotificationLogo>
            </div>
        </div>
        <div className="mobile-header">
        <div className="header flex center-2 mobile-top-header">
            <div className="flex center-2">
                <Logo></Logo>
            </div>
            <div className="flex center-2">
                <NotificationLogo></NotificationLogo>
            </div>
        </div>
            <div className="awesome-text">{props.upperText}</div>
            <div className="welcome-text">{props.lowerText}</div>
        </div>
        </>
    );
}

export default header;