import React from "react";
import "./Trending.css";
import trendChair1 from "../Images/trendChair1.svg";
import trendChair2 from "../Images/trendChair2.svg";
import trendChair3 from "../Images/trendChair3.svg";
import trendChair4 from "../Images/trendChair4.svg";
import prtPink from "../Images/prtpink.svg";
import prtBlue from "../Images/prtblue.svg";
import exechair from "../Images/exechair.svg";
import exeseat from "../Images/exeseat.svg";
import execouch from "../Images/execouch.svg";

function Trending() {
  return (
    <div className="trendContainer">
      <div className="trendLogo">
        <h3>Trending Products</h3>
      </div>
      <div className="trendImg">
        <div className="name1">
          <img src={trendChair1} alt="" />
          <p>Cantilever chair</p>
          <div className="esh6">
            <h6>$26.00 </h6>
            <h5>$42.00</h5>
          </div>
        </div>
        <div className="name2">
          <img src={trendChair2} alt="" />
          <p>Cantilever chair</p>
          <div className="esh6">
            <h6>$26.00 </h6>
            <h5>$42.00</h5>
          </div>
        </div>
        <div className="name3">
          <img src={trendChair3} alt="" />
          <p>Cantilever chair</p>
          <div className="esh6">
            <h6>$26.00 </h6>
            <h5>$42.00</h5>
          </div>
        </div>
        <div className="name4">
          <img src={trendChair4} alt="" />
          <p>Cantilever chair</p>
          <div className="esh6">
            <h6>$26.00 </h6>
            <h5>$42.00</h5>
          </div>
        </div>
      </div>
      <div className="prtTwoCon">
        <div className="prtTwo">
          <div className="prtPink">
            <img src={prtPink} alt="" />
          </div>
          <div className="prtBlue">
            <img src={prtBlue} alt="" />
          </div>
        </div>
        <div className="executive">
          <div className="cover">
            <img src={exechair} alt="" />
            <div className="co">
              <h5>Executive Seat chair</h5>
              <h6>$32.00</h6>
            </div>
          </div>
          <div className="cover">
            <img src={exeseat} alt="" />
            <div className="co">
              <h5>Executive Seat chair</h5>
              <h6>$32.00</h6>
            </div>
          </div>
          <div className="cover">
            <img src={execouch} alt="" />
            <div className="co">
              <h5>Executive Seat chair</h5>
              <h6>$32.00</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trending;
