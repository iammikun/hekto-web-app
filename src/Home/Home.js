import React from 'react'
import '../Home/Home.css';
// import header from './Header.js'
import Lamp from '../Images/Lamp.svg';
import sofa from '../Images/sofa.svg';
import Featured from '../Components/Featured';
import Latest from '../Components/Latest';
import Shopex from '../Components/Shopex';
import Unique from '../Components/Unique';
import Trending from '../Components/Trending';
import Discount from '../Components/Discount';
import Category from '../Components/Category';
import Bg from '../Components/Bg';
import Last from '../Components/Last';

const Home =() =>{
  return (
    <>
    <div className="grey">
      <div className="home">
        <div className="lampImage">
            <img src={ Lamp } alt="" />
        </div>
        <div className="homeText">
            <p>Best Furniture For Your Castle....</p>
            <h2>New Furniture Collection Trends in 2020</h2> 
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</h4>
            <button type="submit">Shop Now</button>
        </div>
        <div className="sofa-flex">
            <div className="sofaImage">
                <img src={ sofa } alt="" />
            </div>
        </div>
      </div>
      <div className="carol">
          <div className="carolSelActive"></div>
          <div className="carolSel"></div>
          <div className="carolSel"></div>
      </div>
    </div>
    <Featured />
    <Latest />
    <Shopex />
    <Unique />
    <Trending />
    <Discount />
    <Category />
    <Bg />
    <Last />
    </>
  )
}

export default Home;