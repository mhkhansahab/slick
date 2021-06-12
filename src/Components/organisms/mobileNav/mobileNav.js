import React from 'react';
import "./mobileNav.css";
import { NavLink } from 'react-router-dom';
import { ReactComponent as HomeIcon} from "./../../../Assets/nav-icons/home.svg";
import { ReactComponent as AnalyticsIcon} from "./../../../Assets/nav-icons/analytics.svg";
import { ReactComponent as ProductsIcon} from "./../../../Assets/nav-icons/products.svg";
import { ReactComponent as ManagementIcon} from "./../../../Assets/nav-icons/management.svg";



function mobileNav() {
    return (
        <div className="mobile-nav">
            <NavLink to="/"><HomeIcon></HomeIcon></NavLink>
            <NavLink to="#"><AnalyticsIcon></AnalyticsIcon></NavLink>
            <NavLink to="#"><ProductsIcon></ProductsIcon></NavLink>
            <NavLink to="/management/banner"><ManagementIcon></ManagementIcon></NavLink>

        </div>
    )
}

export default mobileNav
