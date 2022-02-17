import React, { useEffect, useState } from "react";
import "./Nav.css";
import {useHistory } from "react-router-dom";

function Nav(){
    const [show, handleShow] = useState(false);
    const history = useHistory();
  
    const transitionNavBar = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
      }, []);

    return(
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__background">

                <img 
                    onClick={()=> 
                        history.push('/home')
                    }
                    src="img/logo.png" 
                    alt="background" 
                    className = "nav__logo"/>

                <img 
                    onClick={()=> 
                        history.push('/profile')
                    }
                    src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg" 
                    alt="background" 
                    className = "nav__avatar"/>
            
            </div>
        </div>
    );
}

export default Nav;
