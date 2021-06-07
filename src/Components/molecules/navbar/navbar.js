import React from 'react';
import Navigator from "./../../atoms/navigator/navigator";
import "./navbar.css";
import homeIcon from "./../../../Assets/nav-icons/home.svg";
import analyticsIcon from "./../../../Assets/nav-icons/analytics.svg";
import productsIcon from "./../../../Assets/nav-icons/products.svg";
import managementIcon from "./../../../Assets/nav-icons/management.svg";


function navbar() {
    return (
        <div className="navbar">
            <Navigator text="Home" img={homeIcon}></Navigator>
            <Navigator text="Analytics" img={analyticsIcon}></Navigator>
            <Navigator text="Products" img={productsIcon}></Navigator>
            <Navigator text="Management" img={managementIcon}></Navigator>
        </div>
    );
}

export default navbar;
