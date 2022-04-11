import React from "react";
import "./Featured.css";
import flexchair1 from "../Images/flexchair1.svg";
import flexchair2 from "../Images/flexchair2.svg";
import flexchair3 from "../Images/flexchair3.svg";
import flexchair4 from "../Images/flexchair4.svg";


const Featured = () => {
  return (
    <div>
      <div className="featuredComp">
        <h5>Featured Products</h5>
      </div>
      <div className="featuredImages">
        <div className="chair1">
          <img src={flexchair1} alt="" />
          <div className="chairText">
            <p>Cantilever chair</p>
            <div className="dash">
              <div className="dashGreen"></div>
              <div className="dashPink"></div>
              <div className="dashBlue"></div>
            </div>
            <h5>Code - Y523201</h5>
            <h5>$42.00</h5>
          </div>
        </div>
        <div className="chair2">
          <img src={flexchair2} alt="" />
          <div className="chairText">
            <p>Cantilever chair</p>
            <div className="dash">
              <div className="dashGreen"></div>
              <div className="dashPink"></div>
              <div className="dashBlue"></div>
            </div>
            <h5>Code - Y523201</h5>
            <h5>$42.00</h5>
          </div>
        </div>
        <div className="chair3">
          <img src={flexchair3} alt="" />
          <div className="chairText">
            <p>Cantilever chair</p>
            <div className="dash">
              <div className="dashGreen"></div>
              <div className="dashPink"></div>
              <div className="dashBlue"></div>
            </div>
            <h5>Code - Y523201</h5>
            <h5>$42.00</h5>
          </div>
        </div>
        <div className="chair4">
          <img src={flexchair4} alt="" />
          <div className="chairText">
            <p>Cantilever chair</p>
            <div className="dash">
              <div className="dashGreen"></div>
              <div className="dashPink"></div>
              <div className="dashBlue"></div>
            </div>
            <h5>Code - Y523201</h5>
            <h5>$42.00</h5>
          </div>
        </div>
      </div>
      <div className="slide">
        <div className="nextSlideActive"></div>
        <div className="nextSlide"></div>
        <div className="nextSlide"></div>
        <div className="nextSlide"></div>
      </div>
    </div>
  );
};

export default Featured;
