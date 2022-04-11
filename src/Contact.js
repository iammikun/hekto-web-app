import React from "react";
import "./Contact.css";
import people from "./Images/people.svg";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-logo">
        <h1>Contact Us</h1>
        <div className="row">
          <p>Home</p>
          <p>.</p>
          <p>Pages</p>
          <p className="line">.</p>
          <p className="zine">Contact Us</p>
        </div>
      </div>
      <div className="contact-flex">
        <div className="dahFirstOne">
          <h3>Information About us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
            tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
            vitae lobortis quis bibendum quam.
          </p>
          <div className="color-cont">
            <div className="colorBlue"></div>
            <div className="colorPink"></div>
            <div className="colorGreen"></div>
          </div>
        </div>
        <div className="dahSecondOne">
          <div>
            <h3>Contact Way</h3>
            <div className="dahSecBlue">
              <div className="wuman"></div>
              <div className="peace">
                <p>Tel: 877-67-88-99</p>
                <p>E-Mail: shop@store.com</p>
              </div>
            </div>
            <div className="dahSecYel">
              <div className="wuman"></div>
              <div className="peace">
                <p>20 Margaret st, London</p>
                <p>Great britain, 3NM98-LK</p>
              </div>
            </div>
          </div>
          <div className="domTop">
            <div className="dahSecPink">
              <div className="wuman"></div>
              <div className="peace">
                <p>Support Forum</p>
                <p>For over 24hr</p>
              </div>
            </div>
            <div className="dahSecGreen">
              <div className="wuman"></div>
              <div className="peace">
                <p>Free standard shipping</p>
                <p>on all orders.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="touch">
        <div className="touchTxt">
          <h3>Get In Touch</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices tristique amet erat vitae eget dolor los vitae
            lobortis quis bibendum quam.
          </p>
          <div className="touchForm">
            <input type="text" placeholder="Your Name*" className="continput" />
            <input type="text" placeholder="Your E-mail" />
          </div>
          <div className="domo">
            <input type="text" placeholder="Subject*" />
            <br />
            <textarea
              rows=""
              cols=""
              placeholder="Type Your Messege*"
            ></textarea>
          </div>
          <div className="press">
            <Link to="/">Send Mail</Link>
          </div>
        </div>
        <div className="touchImg">
          <img src={people} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
