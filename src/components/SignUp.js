import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import { auth } from "../firebase/index.js";
import * as routes from "../constants/routes";

// Sign Up Page
const SignUpPage = ({ history }) => {
  return (
    <div>
      <h1>SignUp Page</h1>
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
    console.log(this.state)
    const { email, passwordOne, error } = this.state;
    const { history } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.REDIRECT);
      })
      .catch(error => {
        this.setState({ error: error });
      });

    event.preventDefault()
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
        <input 
          value={username}
          type="text"
          onChange={event => this.handleInput('username', event.target.value)}
          placeholder="your name..."
        />
        <br />
        <input 
          value={email}
          type="email"
          onChange={event => this.handleInput('email', event.target.value)}
          placeholder="your email..."
        />
        <br />
        <input 
          value={passwordOne}
          type="password"
          onChange={event => this.handleInput('passwordOne', event.target.value)}
          placeholder="enter password..."
        />
        <br />
        <input 
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