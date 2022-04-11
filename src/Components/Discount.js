import React from "react";
import "./Discount.css";
import { Link } from "react-router-dom";
import discchair from "../Images/discchair.svg";
import mark from "../Images/mark.svg";

function Discount() {
  return (
    <div className="discount-container">
      <div className="disc-logo">
        <h3>Discount Item</h3>
      </div>
      <div className="discink">
        <ul>
          <li>
            <Link to="/wood chair" className="active">
              Wood Chair
            </Link>
          </li>
          <li>
            <Link to="/plastic chair">Plastic Chair</Link>
          </li>
          <li>
            <Link to="/sofa collection">Sofa Collection</Link>
          </li>
        </ul>
      </div>
      <div className="disc-flex">
        <div className="fem">
          <h3>20% Discount Of All Products</h3>
          <h6>Eams Sofa Compact</h6>
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
            feugiat habitasse nec, bibendum condimentum.
          </h5>
          <div className="markFlex">
            <div>
              <div className="mark">
                <img src={mark} alt="" />
                <p>Material expose like metals</p>
              </div>
              <div className="mark">
                <img src={mark} alt="" />
                <p>Simple neutral colours.</p>
              </div>
            </div>
            <div>
              <div className="mark1">
                <img src={mark} alt="" />
                <p>Clear lines and geomatric figures</p>
              </div>
              <div className="mark1">
                <img src={mark} alt="" />
                <p>Material expose like metals</p>
              </div>
            </div>
          </div>
          <div className="nowShop">
            <Link to="/">Shop Now</Link>
          </div>
        </div>
        <div className="chekCon">
          <img src={discchair} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Discount;
