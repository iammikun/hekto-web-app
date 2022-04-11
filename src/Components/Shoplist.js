import React from "react";
import "./Shoplist.css";
import grid from "../Images/Grid.svg";
import solid from "../Images/solid.svg";
import AccumCompo from "../Components/AccumCompo";

const Shoplist = () => {
  return (
    <div className="shoplist-container">
      <div className="shoplist-logo">
        <h2>Shop List</h2>
        <div className="row">
          <p>Home</p>
          <p>.</p>
          <p>Pages</p>
          <p className="line">.</p>
          <p className="zine">Shop List</p>
        </div>
      </div>
      <div className="ecom-flex">
        <div className="ecomTxt">
          <p>Ecommerce Acceories & Fashion item </p>
          <h6>About 9,620 results (0.62 seconds)</h6>
        </div>
        <div className="dahCon">
          <div className="pge-flex">
            <p>Per Page:</p>
            <input type="text" className="" />
          </div>
          <div className="sort-flex">
            <p>Sort By:</p>
              <select name="" id="">
                <option value="">Best Match</option>
                <option value="">Fr</option>
              </select>
          </div>
          <div className="view-flex">
            <p>View:</p>
            <img src={grid} alt="" />
            <img src={solid} alt="" />
            <input type="text" className="" />
          </div>
        </div>
      </div>
      <AccumCompo />
    </div>
  );
};

export default Shoplist;
