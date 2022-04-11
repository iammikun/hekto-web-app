import React from "react";
import "./Category.css";
import catchair1 from "../Images/catchair1.svg";
import catchair2 from "../Images/catchair2.svg";
import catchair3 from "../Images/catchair3.svg";
import catchair4 from "../Images/catchair4.svg";

function Category() {
  return (
    <div className="category-container">
      <div className="category-logo">
        <h3>Top Categories</h3>
      </div>
      <div className="cartImg">
        <div className="cough1">
          <img src={catchair1} alt="" className="image1" />
          <div>
            <h4>Mini LCW chair</h4>
            <h6>$56.00</h6>
          </div>
        </div>
        <div className="cough2">
          <img src={catchair2} alt="" className="image2" />
          <div>
            <h4>Mini LCW chair</h4>
            <h6>$56.00</h6>
          </div>
        </div>
        <div className="cough3">
          <img src={catchair3} alt="" className="image3" />
          <div>
            <h4>Mini LCW chair</h4>
            <h6>$56.00</h6>
          </div>
        </div>
        <div className="cough4">
          <img src={catchair4} alt="" className="image4" />
          <div>
            <h4>Mini LCW chair</h4>
            <h6>$56.00</h6>
          </div>
        </div>
      </div>
        <div className="cart-rosel">
          <div className="rosel-active"></div>
          <div className="rosel"></div>
          <div className="rosel"></div>
        </div>
    </div>
  );
}

export default Category;
