import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <React.Fragment>
      <div className={classes.group}>
        <label htmlFor={props.id}>{props.label}</label>
        <input type={props.type} id={props.id} value={props.value} />
      </div>
    </React.Fragment>
  );
};

export default Input;
