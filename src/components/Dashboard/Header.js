import React, { useState } from "react";
import classes from "./Header.module.css";
import IconUserpro from "../UI/SvgIcon/IconUserPro";
import IconNotify from "../UI/SvgIcon/IconNotify";
import Dropdown from "../UI/Dropdown";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [notifyOpen, setNotifyOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const notifyHandleClick = () => {
    setNotifyOpen(!notifyOpen);
  };
  return (
    <div className={classes.header}>
      <div className={classes.iconBox}>
        <IconNotify height="25px" width="25px" onClick={notifyHandleClick} />

        <div
          className={`${classes.notify} ${
            !notifyOpen ? classes.noactive : classes.noinactive
          }`}
        >
          <div className={classes.headbox}>
            <h3 >notification</h3>
          </div>
          <ul className={classes['notify-list']}>
            <li className={classes['notify-item']}>last login was 2 HOUR 1 MUNITE14SECONDS AGAO</li>
            <li className={classes['notify-item']}>order completed</li>
            <li className={classes['notify-item']}>order pending.....</li>
          </ul>
        </div>

        <IconUserpro
          className={classes.iconuser}
          height="25px"
          width="25px"
          onClick={handleClick}
        />

        <div
          className={`${classes.userbox} ${
            open ? classes.active : classes.inactive
          }`}
        >
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default Header;
