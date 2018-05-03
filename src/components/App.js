import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import '../styles/App.css';

import * as routes from "../constants/routes";

import Navigation from "./Navigation";
import LandingPage from "./LandingPage";
import SignUpPage from "./SignUp";
import SignInPage from "./SignIn";
import RedirectPage from "./RedirectPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Navigation />
          </header>

            <Route exact path={routes.LANDING} component={() => <LandingPage />} />
            <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
            <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
            <Route exact path={routes.REDIRECT} component={() => <RedirectPage />} />
        </div>
      </Router>
    );
  }
}

export default App;
