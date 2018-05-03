import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import { auth } from "../firebase";
import * as routes from "../constants/routes";

// Sign Up Page
const SignInPage = ({ history }) => {
  return (
    <div>
      <h1>Sign In Page</h1>
      <SignInForm history={history} />
    </div>
  )
};

// Initial State
const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

// Sign Up Form
class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE }
  }

  handleInput = (propertyName, value) => {
    this.setState({
      [propertyName]: value
    })
  }
  
  onSubmit = (event) => {
    const { email, password, error } = this.state;
    const { history } = this.props;

    auth.doSignInUserWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.REDIRECT);
      })
      .catch(error => {
        this.setState({ error: error });
      });

    event.preventDefault();
  }

  render() {
    const { email, password, error } = this.state;

    const isInvalid =
      password === "" ||
      email === "";

    return (
      <form onSubmit={this.onSubmit}>
        <label for="email">Email: </label>
        <input 
          name="email"
          value={email}
          type="email"
          onChange={event => this.handleInput('email', event.target.value)}
          placeholder="your email..."
        />
        <br />
        <label for="password">Password: </label>
        <input 
          name="password"
          value={password}
          type="password"
          onChange={event => this.handleInput('password', event.target.value)}
          placeholder="enter password..."
        />
        <br />
        <button disabled={isInvalid} type="submit">Sign In</button>
        <br />
        { error && <p>{error.message}</p> }
      </form>
    )
  }
}

export default withRouter(SignInPage);

export { SignInForm };