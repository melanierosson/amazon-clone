import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from "react-router-dom";
import { auth } from './firebase';

function Login() {

  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (event) => {
    // stops refresh
    event.preventDefault();
    // login logic
    auth
      .signInWithEmailAndPassword(email,password)
      .then((auth) => {
        // logged in and redirect to homepage
        history.push('/');
      })
      .catch((e) => alert(e.message));
  };

  const register = (event) => {
    // stops refresh
    event.preventDefault();
    // register logic
    auth
      .createUserWithEmailAndPassword(email,password)
      .then(auth => {
        // created a user and logged in and redirect to homepage
        history.push('/');
      })
      .catch((e) => alert(e.message));
  }

  return (
    <div className="login">
      <Link to="/">
        <img 
        className="login__logo"
          src="https://rmhcsoutherncolorado.org/wp-content/uploads/2019/01/amazon-logo-transparent.png"
          alt="Login Logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input 
            value={email} 
            onChange={event => setEmail(event.target.value)} 
            type="email" 
          />
          <h5>Password</h5>
          <input 
            value={password} 
            onChange={event => setPassword(event.target.value)}  
            type="password" 
          />
          <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
        </form>

        <p>
          By continuing, you agree to Amazon's
          &nbsp;
          <a href="https://smile.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088">
            Conditions of Use
          </a> 
          &nbsp;and&nbsp;
          <a href="https://smile.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496">
            Privacy Notice
            </a>.
        </p>
        <p class="login__subtext"><small>New to Amazon?</small></p>
        <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
      </div>
    </div>
  );
}

export default Login;
