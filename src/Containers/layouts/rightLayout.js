import React from 'react'
import "./layout.css";
// import Home from "./../home/home";
import Management from "./../management/management";

import "./../../Styles/media-queries/layout.css";
function rightLayout() {
    return (
        <div className="right-layout">
            {/* <Home></Home> */}
            <Management></Management>
        </div>
    );
}

export default rightLayout;
