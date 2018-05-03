import React from 'react';
import { Link } from "react-router-dom";

import * as routes from "../constants/routes";

const Navigation = () => {
  return (
    <ul>
      <li><Link to={routes.LANDING}>Landing Page</Link></li>
      <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
      <li><Link to={routes.SIGN_UP}>Sign Up</Link></li>
      <li><Link to={routes.REDIRECT}>Redirect Page</Link></li>
    </ul>
  )
}

export default Navigation;