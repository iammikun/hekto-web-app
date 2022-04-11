import React from "react";
import "./Products.css";
import bag1 from "./Images/bag1.svg";
import bag2 from "./Images/bag2.svg";
import bag3 from "./Images/bag3.svg";
import bag4 from "./Images/bag4.svg";
import star from "./Images/star.svg";
import muaah from "./Images/muaah.svg";
import proper from "./Images/proper.svg";
import { Link } from "react-router-dom";
import arrow from "./Images/arrow.svg";
import arrowBlue from "./Images/arrowBlue.svg";
import jeanPro from "./Images/jeanPro.svg";
import sunPro from "./Images/sunPro.svg";
import whitePro from "./Images/whitePro.svg";
import dummyPro from "./Images/dummyPro.svg";
import Social from "./Components/Social";

const Products = () => {
  return (
    <div className="products-container">
      <div className="contact-logo">
        <h1>Product Details</h1>
        <div className="row">
          <p>Home</p>
          <p>.</p>
          <p>Pages</p>
          <p className="line">.</p>
          <p className="zine">Product Details</p>
        </div>
      </div>
      <div className="bag-container">
        <div className="column-bag">
          <img src={bag1} alt="" />
          <img src={bag2} alt="" />
          <img src={bag3} alt="" />
        </div>
        <div>
          <img src={bag4} alt="" />
        </div>
        <div className="ply-container">
          <h3>Playwood arm chair</h3>
          <div className="star-flex">
            <img src={star} alt="" />
            <h6>(22)</h6>
          </div>
          <div className="money-flex">
            <h5>$32.00</h5>
            <h5 className="mbo">$32.00</h5>
          </div>
          <h5>Color</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            tellus porttitor purus, et volutpat sit.
          </p>
          <div className="add-cont">
            <h4>Add To Cart</h4>
            <img src={muaah} alt="" />
          </div>
          <h5>Categories:</h5>
          <h5>Tags</h5>
          <div className="proper-flex">
            <h5>Share</h5>
            <img src={proper} alt="" />
          </div>
        </div>
      </div>
      <div className="deinst-color">
        <div className="mrg-movement">
          <nav className="mrg-nav">
            <ul className="mrg-ul">
              <li className="active">
                <Link to="/">Description</Link>
              </li>
              <li className="mrg-link">
                <Link to="/">Additional Info</Link>
              </li>
              <li className="mrg-link">
                <Link to="/">Reviews</Link>
              </li>
              <li className="mrg-link">
                <Link to="/">Video</Link>
              </li>
            </ul>
          </nav>
          <p className="deinst-main">Varius tempor.</p>
          <p>
            Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
            ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
            varius ac est bibendum. Scelerisque a, risus ac ante. Velit
            consectetur neque, elit, aliquet. Non varius proin sed urna, egestas
            consequat laoreet diam tincidunt. Magna eget faucibus cras justo,
            tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla
            lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui,
            massa viverr .
          </p>
          <p className="deinst-main">More details</p>
          <div className="flexPee">
            <img src={arrow} alt="" />
            <p>
              Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
              arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
              nunc nec. Dui, massa viverr .
            </p>
          </div>
          <div className="flexPee">
            <img src={arrowBlue} alt="" />
            <p>
              Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
              arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
              nunc nec. Dui, massa viverr .
            </p>
          </div>
          <div className="flexPee">
            <img src={arrow} alt="" />
            <p>
              Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
              arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
              nunc nec. Dui, massa viverr .
            </p>
          </div>
          <div className="flexPee">
            <img src={arrow} alt="" />
            <p>
              Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
              arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
              nunc nec. Dui, massa viverr .
            </p>
          </div>
        </div>
      </div>
      <div className="relPro-container">
        <div className="relPro">
          <h3>Related Products</h3>
        </div>
        <div className="deep-flex">
          <div>
            <img src={jeanPro} alt="" />
            <div className="jeanFlex">
              <div>
                <h5>Mens Fashion Wear</h5>
                <h5>$43.00</h5>
              </div>
              <img src={star} alt="" />
            </div>
          </div>
          <div>
            <img src={sunPro} alt="" />
            <div className="jeanFlex2">
              <div>
                <h5>Women’s Fashion</h5>
                <h5>$67.00</h5>
              </div>
              <img src={star} alt="" />
            </div>
          </div>
          <div>
            <img src={whitePro} alt="" />
            <div className="jeanFlex3">
              <div>
                <h5>Wolx Dummy Fashion</h5>
                <h5>$67.00</h5>
              </div>
              <img src={star} alt="" />
            </div>
          </div>
          <div>
            <img src={dummyPro} alt="" />
            <div className="jeanFlex4">
              <div>
                <h5>Top Wall Digital Clock</h5>
                <h5>$51.00</h5>
              </div>
              <img src={star} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Social />
    </div>
  );
};

export default Products;
