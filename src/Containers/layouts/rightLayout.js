import React from "react";
import { Switch, Route } from "react-router-dom";
import "./layout.css";
import "./../../Styles/media-queries/layout.css";
import Home from "./../home/home";
import Management from "./../management/management";
function rightLayout() {
  return (
      <div className="right-layout">
        <Switch>
          <Route path="/slick/management">
            <Management></Management>
          </Route>
          <Route path="/slick/">
            <Home></Home>
          </Route>
        </Switch>
      </div>
  );
}

export default rightLayout;
