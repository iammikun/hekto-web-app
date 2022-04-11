import React from "react";
import "./Last.css";
import bloglast1 from "../Images/bloglast1.svg";
import spanner from "../Images/spanner.svg";
import cal from "../Images/cal.svg";
import bloglast2 from "../Images/bloglast2.svg";
import bloglast3 from "../Images/bloglast3.svg"
import { Link } from "react-router-dom";

const Last = () => {
  return (
    <div className="last-container">
      <div className="last-logo">
        <h3>Leatest Blog</h3>
      </div>
      <div className="last-flex">
        <div className="blog1">
          <img src={bloglast1} alt="" />
          <div className="sub-flex">
            <div className="lami">
              <img src={spanner} alt="" />
              <h6>SaberAli</h6>
            </div>
            <div className="lami">
              <img src={cal} alt="" />
              <h6>21 August,2020</h6>
            </div>
          </div>
          <div className="wasope">
            <h5>Top esssential Trends in 2021</h5>
            <p>
              More off this less hello samlande lied much over tightly circa
              horse taped mightly
            </p>
            <Link to="/">Read More</Link>
          </div>
        </div>
        <div className="blog1-mid">
          <img src={bloglast2} alt="" />
          <div className="sub-flex">
            <div className="lami">
              <img src={spanner} alt="" />
              <h6>SaberAli</h6>
            </div>
            <div className="lami">
              <img src={cal} alt="" />
              <h6>21 August,2020</h6>
            </div>
          </div>
          <div className="wasope-mid">
            <h5>Top esssential Trends in 2021</h5>
            <p>
              More off this less hello samlande lied much over tightly circa
              horse taped mightly
            </p>
            <Link to="/">Read More</Link>
          </div>
        </div>
        <div className="blog3">
          <img src={bloglast3} alt="" />
          <div className="sub-flex">
            <div className="lami">
              <img src={spanner} alt="" />
              <h6>SaberAli</h6>
            </div>
            <div className="lami">
              <img src={cal} alt="" />
              <h6>21 August,2020</h6>
            </div>
          </div>
          <div className="wasope">
            <h5>Top esssential Trends in 2021</h5>
            <p>
              More off this less hello samlande lied much over tightly circa
              horse taped mightly
            </p>
            <Link to="/">Read More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Last;
