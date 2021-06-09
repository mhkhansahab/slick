import React from "react";
import "./slider.css";
import Cover from "./../../../Assets/general/cover.png";
import {useRef} from "react";

const Slider = () => {
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  var counter = 1;
  
  
  setInterval(function () {
    const myInput = eval("input"+counter).current;
    if(myInput){
      myInput.checked = true;
    }
    counter++;
    if (counter > 3) {
      counter = 1;
    }
  }, 4000);
  return (
      <div className="slider">
        <div className="slides">
          <input type="radio" name="radio-btn" id="radio1" ref={input1}/>
          <input type="radio" name="radio-btn" id="radio2" ref={input2}/>
          <input type="radio" name="radio-btn" id="radio3" ref={input3}/>
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
          <label htmlFor="radio1" className="manual-btn"></label>
          <label htmlFor="radio2" className="manual-btn"></label>
          <label htmlFor="radio3" className="manual-btn"></label>
        </div>
      </div>
  );
};
export default Slider;
