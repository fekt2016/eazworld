import React from "react";
import {Link} from 'react-router-dom'
import classes from "./Footer.module.css";
import logo from "../../assest/logo100.png";
import FaceBook from '../UI/SvgIcon/FaceBook'
import Twitter from '../UI/SvgIcon/Twitter';
import Instagram from '../UI/SvgIcon/Instagram';
import Whatsapp from '../UI/SvgIcon/Whatsapp';

import NavItem from "./NavItem";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <img className={classes.img} src={logo} alt="footerlogo" />
      <ul className={classes.nav}>
        <NavItem />
      </ul>
      <div className={classes.social}>
       <Link><FaceBook className={classes.icon} color='#3b5998' height='30px' width='30px' /></Link>
       <Link><Twitter className={classes.icon}  color='#00acee' height='30px' width='30px'  /></Link>
        <Link><Instagram className={classes.icon}  color='#d62976' height='30px' width='30px'  /></Link>
        <Link><Whatsapp className={classes.icon}  color='#25D366' height='30px' width='30px'  /></Link>
      </div>
      <p>Copyright © 2022 eazworld. All rights reserved</p>
    </footer>
  );
};

export default Footer;
