import React from "react";
import { Link, Form, useActionData, useNavigation } from "react-router-dom";
import logo from "../assest/edo.png";
import classes from "./SignInForm.module.css";
import Button from "./UI/Button";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";


const SignInForm = (props) => {
  const data = useActionData();

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const notify = () => {
    toast("successfully login");
  };

  return (
    <>
      <main className={classes.signinform}>
        <div className={classes.content}>
          <header className={classes.header}>
            <img src={logo} alt="signlogo" />
            <h1 className={classes.heading}>sign in to eazworld</h1>
          </header>

          <Form method="post" className={classes.form}>
            <div className={classes.group}>
              <label className={classes.label} htmlFor="email">
                email address
              </label>
              <input
                className={classes.input}
                type="email"
                name="email"
                required
              />
            </div>
            <div className={classes.group}>
              <label className={classes.label} htmlFor="password">
                password
              </label>
              <input
                className={classes.input}
                type="password"
                name="password"
                required
              />
            </div>
            {data && data.errors && (
              <ul>
                {Object.values(data.errors).map((err) => (
                  <li className={classes.error} key={err}>
                    {err}
                  </li>
                ))}
              </ul>
            )}
            <div className={classes.remember}>
              <input type="checkbox" id="Remember" />
              <label htmlFor="Remember">Remember my email address</label>
            </div>

            <div className={classes.group}>
              <p>reCAPTCHA</p>
              <ReCAPTCHA sitekey="6LcZio0kAAAAAF0P0bsaHeDJEizeW8U4Tnm62phZ" />
            </div>
            <div className={classes.group}>
              <p className={classes.get}>
                By clicking the "Sign in" button below, I sign and agree to
                Gemini’s <Link>PRIVACY POLICY </Link>and{" "}
                <Link>USER AGREEMENT</Link>.
              </p>
            </div>

            <div className={classes.group1}>
              <Button onClick={notify} type="submit" className={classes.btn}>
                {isSubmitting ? "...Submitting" : "Sign in"}
              </Button>
              <div>
                <Link to="/getstarted"> Get started</Link>
                <Link> Forgot password</Link>
              </div>
            </div>
          </Form>
        </div>
      </main>

    </>
  );
};

export default SignInForm;
