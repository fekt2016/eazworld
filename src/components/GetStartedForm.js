import React from "react";
import { Form } from "react-router-dom";
import classes from "./GetStartedForm.module.css";
import logo from "../assest/edo.png";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import Button from "./UI/Button";

// import axios from "axios";

const GetStartedForm = () => {


  return (
    <div className={classes.getform}>
      <header className={classes.header}>
        <img src={logo} alt="signlogo" />
        <h1 className={classes.heading}>
          Let’s get you started with a eazworld account
        </h1>
      </header>
      <main className={classes.main}>
        <Form method="post" className={classes.form}>
          <div className={classes.group}>
            <label className={classes.label} htmlFor="name">
              name
            </label>
            <input className={classes.input} name="name" type="text" />
          </div>

          <div className={classes.group}>
            <label className={classes.label} htmlFor="email">
              email address
            </label>
            <input className={classes.input} name="email" type="email" />
          </div>
          <div className={classes.group}>
            <label className={classes.label} htmlFor="password">
              password
            </label>
            <input className={classes.input} name="password" type="password" />
          </div>
          <div className={classes.group}>
            <label className={classes.label} htmlFor="passwordConfirm">
              confirm password
            </label>
            <input
              className={classes.input}
              name="passwordConfirm"
              type="password"
            />
          </div>

          <div className={classes.group}>
            <p>reCAPTCHA</p>
            <ReCAPTCHA
              sitekey="6LcZio0kAAAAAF0P0bsaHeDJEizeW8U4Tnm62phZ"
              // onChange={onChange}
            />
          </div>
          <div className={classes.group}>
            <p>
              By clicking the "create an account" button below, I sign and agree
              to Eazworld’s <Link>PRIVACY POLICY </Link>and{" "}
              <Link>USER AGREEMENT</Link>.
            </p>
          </div>

          <div className={classes.group1}>
            <Button className={classes.btn}>create account</Button>
            <div>
              <Link to="/signin">sign in</Link>
            </div>
          </div>
        </Form>
      </main>
    </div>
  );
};

export default GetStartedForm;
