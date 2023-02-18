import React from "react";
import logo from "../assest/edo.png";
import classes from "./SignInForm.module.css";
import ButtonBlack from "./UI/Button";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";

const SignInForm = () => {
  // const recaptchaRef = React.createRef();

  const onChange = () => {};


  return (
    <div className={classes.signinform}>
      <header className={classes.header}>
        <img src={logo} alt="signlogo" />
        <h1 className={classes.heading}>sign in to eazworld</h1>
      </header>
      <main className={classes.main}>
        <form className={classes.form}>
          <div className={classes.group}>
            <label className={classes.label} htmlFor="email">email address</label>
            <input className={classes.input} id="email" type="email" />
          </div>
          <div className={classes.group}>
            <label className={classes.label} htmlFor="password">password</label>
            <input className={classes.input} id="password" type="password" />
          </div>
          <div className={classes.remember}>
            <input type="checkbox" id="Remember" />
            <label htmlFor="Remember">Remember my email address</label>
          </div>
          <div className={classes.group}>
            <p>reCAPTCHA</p>
            <ReCAPTCHA
              sitekey="6LcZio0kAAAAAF0P0bsaHeDJEizeW8U4Tnm62phZ"
              onChange={onChange}
            />
          </div>
          <div className={classes.group}>
            <p>
              By clicking the "Sign in" button below, I sign and agree to
              Gemini’s <Link>PRIVACY POLICY </Link>and{" "}
              <Link>USER AGREEMENT</Link>.
            </p>
          </div>

          <div className={classes.group1}>
            <ButtonBlack className={classes.btn}>sign in</ButtonBlack>
            <div>
              <Link to='/getstarted'> Get started</Link>
              <Link > Forgot password</Link>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default SignInForm;
