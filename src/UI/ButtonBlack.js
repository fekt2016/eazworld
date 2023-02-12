import React from 'react';
import classes from '../UI/ButtonBlack.module.css';

const ButtonBlack = (props) => {
  return (
    <button className={classes.button}>{props.children}</button>
  )
}

export default ButtonBlack;