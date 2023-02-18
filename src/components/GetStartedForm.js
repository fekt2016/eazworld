import React from "react";
import classes from "./GetStartedForm.module.css";
import logo from "../assest/edo.png";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import Button from "./UI/Button";

const GetStartedForm = () => {
  const onChange = () => {};



  return (
    <div className={classes.getform}>
      <header className={classes.header}>
        <img src={logo} alt="signlogo" />
        <h1 className={classes.heading}>Let’s get you started with a eazworld account</h1>
      </header>
      <main className={classes.main}>
        <form className={classes.form}>
          <div className={classes.group}>
            <label className={classes.label} htmlFor="lastname">
              last name
            </label>
            <input className={classes.input} id="lastname" type="text" />
          </div>
          <div className={classes.group}>
            <label className={classes.label} htmlFor="firstname">
              first name
            </label>
            <input className={classes.input} id="firstname" type="text" />
          </div>
          <div className={classes.group}>
            <label className={classes.label} htmlFor="email">
              email address
            </label>
            <input className={classes.input} id="email" type="email" />
          </div>
          <div className={classes.group}>
            <label className={classes.label} htmlFor="password">
              password
            </label>
            <input className={classes.input} id="password" type="password" />
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
              By clicking the "create an account" button below, I sign and agree to
              Gemini’s <Link>PRIVACY POLICY </Link>and{" "}
              <Link>USER AGREEMENT</Link>.
            </p>
          </div>

          <div className={classes.group1}>
            <Button className={classes.btn}>create account</Button>
            <div>
             <Link to="/signin">sign in</Link>

            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default GetStartedForm;
