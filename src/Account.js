// import React from 'react'
import { Link } from "react-router-dom";
import "./Account.css";
import Social from "./Components/Social";

function Account() {
  return (
    <div className="acct-container">
      <div className="acctLogo">
        <h2>My Account</h2>
        <div className="row">
          <p>Home</p>
          <p>.</p>
          <p>Pages</p>
          <p className="line">.</p>
          <p className="zine">My Account</p>
        </div>
      </div>
      <div className="acctForm">
        <div className="accttxt">
          <h4>Login</h4>
          <p>Please login using account detail bellow.</p>
          <input type="text" placeholder="Email Address" /> <br />
          <input type="text" placeholder="Password" />
          <div className="goTo">
            <Link to="/">Forgot your password?</Link>
          </div>
          <div className="signBtn">
            <Link to="/error">Sign in</Link>
          </div>
          <div className="create">
            <Link to="/">Don’t have an Account?Create account</Link>
          </div>
        </div>
      </div>
      <Social />
    </div>
  );
}

export default Account;
