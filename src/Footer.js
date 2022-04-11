import React from "react";
import "./Footer.css";
import faceebook from "./Images/faceebook.svg";
import instagram from "./Images/instagram.svg";
import twitter from "./Images/twitter.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footerCon">
      <div className="footerWrap">
        <div className="firstContainer">
          <h3>Hekto</h3>
          <input type="text" placeholder="Enter Email Address" />
          <Link to="/hektodemo">Sign up</Link>
          <div className="pee">
            <h6>Contact Info</h6>
            <h6>17 Princess Road, London, Greater London NW1 8JR, UK</h6>
          </div>
        </div>
        <div className="secondContainer">
          <h3>Categories</h3>
          <h6>Laptops & Computers</h6>
          <h6>Cameras & Photography</h6>
          <h6>Smart Phones & Tablets</h6>
          <h6>Video Games & Consoles</h6>
          <h6>Waterproof Headphones</h6>
        </div>
        <div className="thirdContainer">
          <h3>Customer Care</h3>
          <Link to="/account">My Account</Link>
          <h6>Discount</h6>
          <h6>Returns</h6>
          <a href="/order history">Orders History</a>
          <a href="/order tracking">Order Tracking</a>
        </div>
        <div className="fourthContainer1">
          <h3>Pages</h3>
          <Link to="/blog">Blog</Link>
          <Link to="/">Browse the Shop</Link>
          <h6>Category</h6>
          <h6>Pre-Built Pages</h6>
          <h6>Visual Composer Elements</h6>
          <h6>WooCommerce Pages</h6>
        </div>
      </div>
      <div className="fufuta">
        <div className="web">
          <h6>©Webecy - All Rights Reserved</h6>
        </div>
        <div className="bewImg">
          <img src={faceebook} alt="" />
          <img src={instagram} alt="" />
          <img src={twitter} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
