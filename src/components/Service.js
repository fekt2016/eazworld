import React from "react";
import classes from "./Service.module.css";
import IconSecurity from "./UI/SvgIcon/Security";
import Time from './UI/SvgIcon/BusinessTime'
import IconSecurePaymentLine from "./UI/SvgIcon/SecurePayment";

const Service = () => {
  return (
    <section className={classes.service}>
      <div className={classes.card}>
        <IconSecurity width="100px" height="100px" />
        <div className={classes.textbox}>
        <h2>security</h2>
        <p>All your information is securely with eazworld</p>
        </div>
      </div>
      <div className={classes.card}>
        <Time width="100px" height="100px" />
        <div className={classes.textbox}>
          <h2>24/7 Automated Service</h2>

          <p>sell and buy crypto easier in few munites</p>
        </div>
      </div>
      <div className={classes.card}>
        <IconSecurePaymentLine width="100px" height="100px" />
        <div className={classes.textbox}>
        <h2>Secure Payment</h2>
        <p>mobile money payment makes it a secure way to process your order</p>
        </div>
      </div>
    </section>
  );
};

export default Service;
