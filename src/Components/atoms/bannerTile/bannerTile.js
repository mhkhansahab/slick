import React from "react";
import "./bannerTile.css";
import attachmentButton from "./../../../Assets/tile-icons/attachment.svg";
import bannerImage from "./../../../Assets/banner-images/1.png";
import TileButtons from "./../tileButtons/tileButtons";

function bannerTile() {
  return (
    <div className="banner-tile flex center-2">
      <span className="banner-image">
        <img src={bannerImage} alt=""></img>
      </span>
      <span className="attachment-container flex center-2">
        <span className="attachment-btn">
          <img src={attachmentButton} alt=""></img>
        </span>
        <span className="attachment-text">
          https://images.pexels.com/photos/6231/marketing-color-colors-wheel.jpg?auto=compress&cs…
        </span>
      </span>
      <TileButtons></TileButtons>      
    </div>
  );
}

export default bannerTile;
