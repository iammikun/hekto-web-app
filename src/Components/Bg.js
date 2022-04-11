import React from "react";
import "./Bg.css";
import { Link } from "react-router-dom";
import Social from "../Components/Social";
// import newsbg from '../Images/newsbg.svg';

const bg = () => {
  return (
    <div>
      <div className="bg-container">
        <div className="bg-img">
          <h4>Get Leatest Update By Subscribe 0ur Newslater</h4>
          <div className="bgShop">
            <Link to="/">Shop Now</Link>
          </div>
        </div>
      </div>
        <Social className="social" />
    </div>
  );
};

export default bg;
