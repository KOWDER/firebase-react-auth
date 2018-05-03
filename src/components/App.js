import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import '../styles/App.css';

import * as routes from "../constants/routes";

import Navigation from "./Navigation";
import LandingPage from "./LandingPage";
import SignUp from "./SignUp";
import SignIn from './SignIn';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Navigation />
          </header>

            <Route exact path={routes.LANDING} component={() => <LandingPage />} />
            <Route exact path={routes.SIGN_UP} component={() => <SignUp />} />
            <Route exact path={routes.SIGN_IN} component={() => <SignIn />} />
        </div>
      </Router>
    );
  }
}

export default App;
