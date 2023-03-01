import React from "react";
import classes from "./BuyForm.module.css";
// import Select, { components } from "react-select";

import Button from "./UI/Button";
import Input from "./UI/Input";
import btc from "../assest/btc.png";
import usdt from "../assest/usdt.png";
import eth from "../assest/eth.png";
import mtn from "../assest/mtn.png";
import airtel from "../assest/airtel.png";
import voda from "../assest/voda.png";
import gtbank from "../assest/gtbank.png";
import CustomSelect from "./UI/Select";

import IconBuy from './UI/SvgIcon/IconBuy';

const currency = [
  { value: "bitcoin", label: "bitcoin", icon: btc },
  { value: "tether", label: "tether", icon: usdt },
  { value: "ethereum", label: "ethereum", icon: eth },
];

const payment = [
  { value: "Mtn Mobile Money", label: "Mtn Mobile Money", icon: mtn },
  { value: "airtel/tigo cash", label: "airtel/tigo cash", icon: airtel },
  { value: "vodafone cash", label: "vodafone cash", icon: voda },
  { value: "gt bank", label: "gt bank", icon: gtbank },
];

const miner = [
  { value: 0.5, label: "normal $0.5", icon:'-' },
  { value: 1.5, label: "priority $1.5", icon:'-' },
];

const BuyForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(<h1>order completed</h1>);
  };

  return (
    <section className={classes.buyForm}>
      <div className={classes.headbox}>
        <h2 className={classes.heading}>
        <IconBuy
              className={classes.icon}
              color="#f2a900"
              height="30px"
              width="30px"
            />
          buy currency</h2>
      </div>
      <form onSubmit={handleSubmit} className={classes.form}>
        <CustomSelect label="currency:" options={currency} />
        <Input type="number" label="amountUSD:" />
        <Input type="number" label="amountGHC:" />
        <CustomSelect label="miners fee" options={miner} />
        <Input type="number" label="total to pay:" />
        <Input type="text" label="wallet address:" />
        <CustomSelect label="Payment info:" options={payment} />
        <Button className={classes.btn}>buy</Button>
      </form>
    </section>
  );
};

export default BuyForm;
