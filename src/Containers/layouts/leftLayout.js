import React from 'react'
import "./layout.css";
import Logo from "./../../Components/atoms/logo/logo";
import Navbar from "./../../Components/molecules/navbar/navbar";
import "./../../Styles/media-queries/layout.css";

function leftLayout() {
    return (
        <div className="left-layout">
            <Logo></Logo>
            <Navbar></Navbar>
        </div>
    );
}

export default leftLayout;