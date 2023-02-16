import React from 'react';
import classes from './ButtonWhite.module.css';

const ButtonWhite = (props) => {
  return (
    <div className={classes.button}>{props.children}</div>
  )
}

export default ButtonWhite;