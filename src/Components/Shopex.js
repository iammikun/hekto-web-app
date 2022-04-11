import React from 'react'
import './Shopex.css';
import delivery from '../Images/delivery.svg';
import cashback from '../Images/cashback 1.svg';
import hours from '../Images/hours.svg';
import premium from '../Images/premium.svg';


function Shopex() {
  return (
    <div className="shopexContainer">
        <div className="shopexHead">
            <h5>What Shopex Offer!</h5>
        </div>
        <div className="shopexFlex">
           <div className="shopexTitle1">
               <img src={ delivery } alt="" />
               <h4>24/7 Support</h4>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
           </div>
           <div className="shopexTitle2">
               <img src={ cashback } alt="" />
               <h4>24/7 Support</h4>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
           </div>
           <div className="shopexTitle3">
               <img src={ premium } alt="" />
               <h4>24/7 Support</h4>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
           </div>
           <div className="shopexTitle4">
               <img src={ hours } alt="" />
               <h4>24/7 Support</h4>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
           </div>
        </div>
    </div>
  );
}

export default Shopex