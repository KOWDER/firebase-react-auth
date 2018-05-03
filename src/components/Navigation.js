import React from 'react';
import { Link } from "react-router-dom";

import SignOutButton from "./SignOut";
import * as routes from "../constants/routes";

const Navigation = ({ authUser }) => {
  return (
    <div>
      { authUser
          ? <NavigationAuth />
          : <NavigationNonAuth />
      }
    </div>
  )
}

const NavigationAuth = () => {
  return (
    <ul>
      <li><Link to={routes.LANDING}>Landing Page</Link></li>
      <li><Link to={routes.REDIRECT}>Redirect Page</Link></li>
      <li><SignOutButton /></li> 
    </ul>
  )
}

const NavigationNonAuth = () => {
  return (
    <ul>
      <li><Link to={routes.LANDING}>Landing Page</Link></li>
      <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
      <li><Link to={routes.SIGN_UP}>Sign Up</Link></li>   
    </ul>
  )
}

export default Navigation;