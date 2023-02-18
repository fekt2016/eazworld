import React from 'react';
import classes from './Signin.module.css';
import SignInForm from '../SignInForm';

const SignIn = () => {
  return <div className={classes.signin}>
  <SignInForm  />
  </div>
}

export default SignIn;