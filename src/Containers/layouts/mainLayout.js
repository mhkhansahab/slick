import LeftLayout from "./leftLayout";
import RightLayout from "./rightLayout";
import "./layout.css";
import React from 'react'

function mainLayout() {
    return (
        <div className="layout-container">
            <LeftLayout></LeftLayout>
            <RightLayout></RightLayout>
        </div>
    );
}

export default mainLayout;
