import React from "react";
import "./slider.css";
import Cover from "./../../../Assets/general/cover.png";

const slider = () => {
  var counter = 1;
  setInterval(function () {
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 3) {
      counter = 1;
    }
  }, 4000);
  return (
      <div class="slider">
        <div class="slides">
          <input type="radio" name="radio-btn" id="radio1" />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />
          <div className="slide first">
            <img src={Cover} alt="" />
          </div>
          <div className="slide">
            <img src={Cover} alt="" />
          </div>
          <div className="slide">
            <img src={Cover} alt="" />
          </div>
        </div>
        <div className="navigation-manual flex center-1">
          <label for="radio1" class="manual-btn"></label>
          <label for="radio2" class="manual-btn"></label>
          <label for="radio3" class="manual-btn"></label>
        </div>
      </div>
  );
};
export default slider;
