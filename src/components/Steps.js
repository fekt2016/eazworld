import React from "react";
import classes from "./Steps.module.css";
import img from "../assest/6617.jpg";

const Steps = () => {
  return (
    <section className={classes.step}>
      <ul className={classes["container-left"]}>
        <h3 className={classes.heading}>steps to completed your first order</h3>
        <li className={classes.stepcard}>
          <span className={`${classes.stepnum} ${classes.one}`}>1</span>
          <span className={classes.text}>Create an account</span>
        </li>
        <li className={classes.stepcard}>
          <span className={`${classes.stepnum} ${classes.two}`}>2</span>
          <span className={classes.text}>login</span>
        </li>
        <li className={classes.stepcard}>
          <span className={`${classes.stepnum} ${classes.three}`}>3</span>
          <span className={classes.text}>place an order</span>
        </li>
        <li className={classes.stepcard}>
          <span className={`${classes.stepnum} ${classes.four}`}>4</span>
          <span className={classes.text}>order completed</span>
        </li>
      </ul>
      <div className={classes["container-right"]}>
        <img className={classes.img} src={img} alt="stepimg" />
      </div>
    </section>
  );
};

export default Steps;
