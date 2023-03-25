import React from "react";
import { Form } from "react-router-dom";
import classes from "./SellForm.module.css";
import Button from "../UI/Button";
import CustomSelect from "../UI/CustomSelect";
import IconSell from "../UI/SvgIcon/IconSell";
import Input from "../UI/Input";

import btc from "../../assest/btc.png";
import usdt from "../../assest/usdt.png";
import eth from "../../assest/eth.png";
import mtn from "../../assest/mtn.png";
import airtel from "../../assest/airtel.png";
import voda from "../../assest/voda.png";
import gtbank from "../../assest/gtbank.png";

const currency = [
  { value: "bitcoin", label: "bitcoin", icon: btc },
  { value: "tether", label: "tether", icon: usdt },
  { value: "ethereum", label: "ethereum", icon: eth },
];

const payment = [
  { value: "Mtn momo", label: "Mtn momo", icon: mtn },
  { value: "airtel/tigo cash", label: "airtel/tigo cash", icon: airtel },
  { value: "vodafone cash", label: "vodafone cash", icon: voda },
  { value: "gt bank", label: "gt bank", icon: gtbank },
];


const Sell = () => {
  return (
    <section className={classes.buyForm}>
      <div className={classes.headbox}>
        <h2 className={classes.heading}>
          <IconSell
            className={classes.icon}
            color="#f2a900"
            height="40px"
            width="40px"
          />
          sell currency
        </h2>
      </div>
      <Form method="post" className={classes.form}>
        <CustomSelect label="currency:" options={currency} />
        <Input
          className={classes.group}
          input={{ type: "number", min: 10, name: "amountUSD" }}
          label="amountUSD:"
        />
        <Input
          className={classes.group}
          input={{ type: "number", min: 10, name: "number" }}
          label="amountGHC:"
        />
        <CustomSelect label="Payment info:" options={payment} />
        <Button type="submit" className={classes.btn}>
          sell
        </Button>
      </Form>
    </section>
  );
};

export default Sell;
