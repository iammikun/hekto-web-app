import React from "react";
import group from "../Images/groupchair.svg";
import "./Unique.css";
import { Link } from 'react-router-dom';

function Unique() {
  return (
    <div className="uniqueWrapper">
      <div className="groupChair">
        <img src={group} alt="" />
      </div>
      <div className="groupTxt">
        <h4>Unique Features Of leatest & Trending Poducts</h4>
        <div className="fflex">
          <div className="pink"></div>
          <p>All frames constructed with hardwood solids and laminates</p>
        </div>
        <div className="fflex">
          <div className="blue"></div>
          <p>
            Reinforced with double wood dowels, glue, screw - nails corner
            blocks and machine nails
          </p>
        </div>
        <div className="fflex">
          <div className="green"></div>
          <p>Arms, backs and seats are structurally reinforced</p>
        </div>
        <div className="beng">
          <Link to="/shopping curt">Add To Cart</Link>
          <div>
            <p>B&B Italian Sofa </p>
            <p>$32.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Unique;
