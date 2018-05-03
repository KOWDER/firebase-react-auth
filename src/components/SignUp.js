import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import { auth } from "../firebase";
import * as routes from "../constants/routes";

// Sign Up Page
const SignUpPage = ({ history }) => {
  return (
    <div>
      <h1>Sign Up Page</h1>
      <SignUpForm history={history} />
    </div>
  )
};

// Initial State
const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};

// Sign Up Form
class SignUpForm extends Component {
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
    const { username, email, passwordOne, passwordTwo, error } = this.state;
    const { history } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
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
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    return (
      <form onSubmit={this.onSubmit}>
        <label for="username">Name: </label>
        <input 
          name="username"
          value={username}
          type="text"
          onChange={event => this.handleInput('username', event.target.value)}
          placeholder="your name..."
        />
        <br />
        <label for="email">Email: </label>
        <input 
          name="email"
          value={email}
          type="email"
          onChange={event => this.handleInput('email', event.target.value)}
          placeholder="your email..."
        />
        <br />
        <label for="passwordOne">Password: </label>
        <input 
          name="passwordOne"
          value={passwordOne}
          type="password"
          onChange={event => this.handleInput('passwordOne', event.target.value)}
          placeholder="enter password..."
        />
        <br />
        <label for="passwordTwo">Confirm Password: </label>
        <input 
          name="passwordTwo"
          value={passwordTwo}
          type="password"
          onChange={event => this.handleInput('passwordTwo', event.target.value)}
          placeholder="confirm password..."
        />
        <br />
        <button disabled={isInvalid} type="submit">Sign Up</button>
        <br />
        { error && <p>{error.message}</p> }
      </form>
    )
  }
}



export default withRouter(SignUpPage);

export { SignUpForm };