import React from "react";
import "./tileButtons.css";
import deleteButton from "./../../../Assets/tile-icons/delete.svg";
import editButton from "./../../../Assets/tile-icons/edit.svg";


function tileButtons() {
  return (
    <div>
      <span className="tile-btn">
        <img src={editButton} alt=""></img>
      </span>
      <span className="tile-btn">
        <img src={deleteButton} alt=""></img>
      </span>
    </div>
  );
}

export default tileButtons;
