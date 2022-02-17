import React from "react";
import './ProfileScreen.css';
import Nav from '../Nav';
import PlanScreen from "../PlanScreen";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
// import { Redirect, useHistory } from "react-router-dom";

function ProfileScreen(){

    const user = useSelector(selectUser);

    return (
        <div className="profileScreen">
            <Nav/>

            <div className = "profileScreen__body">
                <h1>Edit Profile</h1>
                
                <div className="profileScreen__info">
                    <img src = "https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg" className="profileScreen__avatar" alt = "profileScreen__avatar" />

                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                            <h3>Plans</h3>
                            
                            <PlanScreen />
                            
                            <button type = "submit" className = "profileScreen__signout" onClick = {() => auth.signOut()}>Sign Out</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ProfileScreen;