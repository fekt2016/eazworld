import React from "react";
import classes from "./Nav.module.css";
import logo from "../../assest/edo.png";
import { Link } from "react-router-dom";
import Button from "../UI/Button";

import NavItem from "./NavItem";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <img className={classes.logo} src={logo} alt="eaz logo" />
      <h1>EazWorld</h1>
      <ul className={classes.list}>
       <NavItem  />
      </ul>
      <div className={classes.btnbox}>
        <Button className={classes.btnwhite}>
          <Link to='signin'>Sign In</Link>
        </Button>
        <Button className={classes.btn}>
          <Link to='getstarted'>get started</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Nav;
