import React from "react";
import "./Error.css";
import errorImg from "./Images/errorImg.svg";
import { Link } from "react-router-dom";
import Social from "./Components/Social";

const Error = () => {
  return (
    <div className="acct-container">
      <div className="acctLogo">
        <h2>404 Not Found</h2>
        <div className="row">
          <p>Home</p>
          <p>.</p>
          <p>Pages</p>
          <p className="line">.</p>
          <p className="zine">404 Not Found</p>
        </div>
      </div>
      <div className="error-div">
        <img src={errorImg} alt="" />
      </div>
      <div className="error-btn">
        <Link to="/home">Back To Home</Link>
      </div>
      <Social />
    </div>
  );
};

export default Error;
