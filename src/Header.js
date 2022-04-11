import React, { useState } from "react";
import message from "./Images/message.svg";
import call from "./Images/call.svg";
import vector from "./Images/Vector.svg";
import love from "./Images/love.svg";
import cart from "./Images/cart.svg";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header-1">
        <div className="head">
          <>
            <img src={message} alt="" />
            <span>mhhasanul@gmail.com</span>
          </>
          <>
            <img src={call} alt="" />
            <span>(12345)67890</span>
          </>
        </div>
        <div className="head2">
          <form action="">
            <select name="" id="">
              <option value="">English</option>
              <option value="">Fr</option>
            </select>
            <select name="" id="">
              <option value="">USD</option>
              <option value="">NGN</option>
            </select>
          </form>
          <Link to="/login">Login</Link>
          <div className="zii">
            <span>Wishlist</span>
            <div className="man">
              <img src={love} alt="" />
            </div>
          </div>
          <img src={cart} alt="" />
        </div>
      </div>
      <div className="header-2">
        <div className="flex">
          <div className="thereal">
            <Link to="/home">Hekto</Link>
          </div>
          <nav className="links">
            <form action="" className="anoda">
              <Link to="/home">
                <select name="" id="">
                  <option value="">Home</option>
                  <option value="">FAQ</option>
                  <option value="">Home</option>
                  <option value="">Home</option>
                </select>
              </Link>
            </form>
            <li className="nav-link">
              <Link to="/pages">Pages</Link>
            </li>
            <li className="nav-link">
              <Link to="/products">Products</Link>
            </li>
            <li className="nav-link">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="nav-link">
              <Link to="/shoplist">Shop</Link>
            </li>
            <li className="nav-link">
              <Link to="/contact">Contact</Link>
            </li>
          </nav>
        </div>
        <div className="gbam">
          <div className="search-input">
            <input type="text" />
          </div>
          <div className="dim">
            <img src={vector} alt="" />
          </div>
        </div>
        {/* <div className="hambuger">
          <Link to="/" className="menu-bars">
            <FaBars />
          </Link>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
