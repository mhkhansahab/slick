import React from 'react';
import Navigator from "./../../atoms/navigator/navigator";
import "./navbar.css";
import homeIcon from "./../../../Assets/nav-icons/home.svg";
import analyticsIcon from "./../../../Assets/nav-icons/analytics.svg";
import productsIcon from "./../../../Assets/nav-icons/products.svg";
import managementIcon from "./../../../Assets/nav-icons/management.svg";
import {NavLink} from "react-router-dom";

function navbar() {
    return (
        <div className="navbar">
            <NavLink to="/" style={{textDecoration:"none"}}><Navigator text="Home" img={homeIcon}></Navigator></NavLink>
            <NavLink to="#" style={{textDecoration:"none"}}><Navigator text="Analytics" img={analyticsIcon}></Navigator></NavLink>
            <NavLink to="#" style={{textDecoration:"none"}}><Navigator text="Products" img={productsIcon}></Navigator></NavLink>
            <NavLink to="/management" style={{textDecoration:"none"}}><Navigator text="Management" img={managementIcon}></Navigator></NavLink>
        </div>
    );
}

export default navbar;
