import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <React.Fragment>
      <div className={`${classes.group} ${props.className}`}>
        <label htmlFor={props.input.name}>{props.label}</label>
        <input {...props.input} />
      </div>
    </React.Fragment>
  );
};

export default Input;
