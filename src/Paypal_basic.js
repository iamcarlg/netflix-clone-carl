import React from "react";
import { PayPalButton } from "react-paypal-button-v2";
import "./Paypal_basic.css";

import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

import Nav from "./Nav";

function Paypal_basic(){
    const payment = useSelector(selectUser);
    
    return(
        <div className="paypal">

            <Nav/>

            <br/><br/><br/><br/><br/><br/>
            
            <div className = "profileScreen__body">
                <h1>Netflix Basic</h1>
                
                <div className="profileScreen__info">
                    <img src = "https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg" className="profileScreen__avatar" alt = "profileScreen__avatar" />

                    <div className="profileScreen__details">
                        <h2>{payment.email}</h2>
                        <div className="profileScreen__plans">
                            <h3>Vous avez choisi le forfait Standard : $12.99</h3>
                            
                            <div className="profileScreen__pricing">

                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* <input
            type="number"
            value={10}
            onChange={(e) => setState(e.target.value)}
            /> */}
            
            <br/><br/>

            <div className="paypal__processor">

                <PayPalButton
                options={{
                    clientId: "AWwuMOVu6C4veZhqjt-rcS9BUM-0Dj1ZcnTEGvELWOWiLst0qldnt_2pas318mYUEBlJQ5UN1Ee1UEYP",
                    currency: "USD",
                }}
                amount={12.99}
                onSuccess={(details, data) => {
                    alert("Transaction completed by " + details.payer.name.given_name);
                    console.log({ details, data });
        
                }}
                />

            </div>
      </div>
    )
}

export default Paypal_basic;
