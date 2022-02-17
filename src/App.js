import React, { useEffect} from 'react';
import './';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import AboutMovie from './AboutMovie';
import Paypal_standard from './Paypal_standard';
import Paypal_basic from './Paypal_basic';
import Paypal_premium from './Paypal_premium';
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { auth } from './firebase';
import { login, logout, selectUser} from './features/userSlice';
import { useDispatch, useSelector } from "react-redux";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {

        // Login
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        // Logged out
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">

      <Router>
        {!user ? (
            <LoginScreen />

        ) : (
          <Switch>
              <Route path="/about">
                  <AboutMovie />
              </Route>

              <Route exact path="/profile">
                <ProfileScreen />
              </Route>

              <Route path="/home">
                  <HomeScreen />
              </Route>

              <Route path="/paypal-standard">
                  <Paypal_standard />
              </Route>

              <Route path="/paypal-basic">
                  <Paypal_basic />
              </Route>

              <Route path="/paypal-premium">
                  <Paypal_premium />
              </Route>

              <Route path="/">
                  <ProfileScreen />
              </Route>
              
          </Switch>
        )}
        
      </Router>
    </div>
  );
}

export default App;