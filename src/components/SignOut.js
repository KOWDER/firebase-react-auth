import React from 'react';

import { auth } from "../firebase/index.js";

const SignOutButton = () => {
  return (
    <button type="button" onClick={auth.doSignOut}>Sign Out</button>
  )
}

export default SignOutButton;