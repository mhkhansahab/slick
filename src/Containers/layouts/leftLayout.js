import React from 'react'
import "./layout.css";
import "./../../Styles/media-queries/layout.css";
import Logo from "./../../Components/atoms/logo/logo";
import Navbar from "./../../Components/molecules/navbar/navbar";
import ProCard from "./../../Components/atoms/proCard/proCard";

function leftLayout() {
    return (
        <div className="left-layout">
            <Logo></Logo>
            <Navbar></Navbar>
            <ProCard></ProCard>
        </div>
    );
}

export default leftLayout;