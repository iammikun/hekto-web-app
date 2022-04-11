import React from "react";
import leatImage1 from "../Images/leatImage1.svg";
import leatImage2 from "../Images/leatImage2.svg";
import leatImage3 from "../Images/leatImage3.svg";
import leatImage4 from "../Images/leatImage4.svg";
import leatImage5 from "../Images/leatImage5.svg";
import leatImage6 from "../Images/leatImage6.svg";
import "./Latest.css";

function Latest() {
  return (
    <div className="latestComp">
      <div className="latestCompTxt">
        <h5>Leatest Products</h5>
      </div>
      <div className="latestCompNav">
        <nav className="navLink">
          <ul>
            <li className="linksActive">
              <a href="/new-arrival">New Arrival</a>
            </li>
            <li className="links">
              <a href="/best-seller">Best Seller</a>
            </li>
            <li className="links">
              <a href="/featured">Featured</a>
            </li>
            <li className="links">
              <a href="/special-0ffer">Special Offer</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="leatest-imgContainer">
        <div className="wrapper">
          <div className="imgContainer">
            <img src={leatImage1} alt="" />
            <div className="white-span">
              <span>Comfort Handy Craft</span>
              <span>$42.00</span>
              <span>$65.00</span>
            </div>
          </div>
          <div className="imgContainer">
            <img src={leatImage2} alt="" />
          </div>
          <div className="imgContainer">
            <img src={leatImage3} alt="" />
          </div>
        </div>
        <div className="wrapper">
          <div className="imgContainer4">
            <img src={leatImage4} alt="" />
          </div>
          <div className="imgContainer5">
            <img src={leatImage5} alt="" />
          </div>
          <div className="imgContainer6">
            <img src={leatImage6} alt="" />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Latest;
