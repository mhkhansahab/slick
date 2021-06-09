import React from "react";
import "./listManager.css";
import BannerTilesHolder from "./../../organisms/bannerTilesHolder/bannerTilesHolder";
import ProductTilesHolder from "./../../organisms/productTilesHolder/productTilesHolder";
import { Switch, Route, NavLink } from "react-router-dom";

function listManager() {
  return (
    <div className="banner-container">
      <div className="management-nav flex center-2">
        <NavLink to="/management/banner" style={{textDecoration:"none"}}>
          <div className="management-links">
            <div className="management-links-text">Manage Banner</div>
            <div className="management-links-border"></div>
          </div>
        </NavLink>
        <NavLink to="/management/product" style={{textDecoration:"none"}}>
          <div className="management-links product">
            <div className="management-links-text">Manage Products</div>
            <div className="management-links-border"></div>
          </div>
        </NavLink>
        <div className="add-new-btn">+ Add New</div>
      </div>

      <Switch>
        <Route path="/management/banner">
          <BannerTilesHolder></BannerTilesHolder>
        </Route>
        <Route path="/management/product">
          <ProductTilesHolder></ProductTilesHolder>
        </Route>
      </Switch>
    </div>
  );
}

export default listManager;
