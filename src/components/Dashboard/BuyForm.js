import React, { useState } from "react";
import classes from "./BuyForm.module.css";
import { Form } from "react-router-dom";
// import Select, { components } from "react-select";

import Button from "../UI/Button";
import Input from "../UI/Input";
import btc from "../../assest/btc.png";
import usdt from "../../assest/usdt.png";
import eth from "../../assest/eth.png";
import mtn from "../../assest/mtn.png";
import airtel from "../../assest/airtel.png";
import voda from "../../assest/voda.png";
import gtbank from "../../assest/gtbank.png";
import CustomSelect from "../UI/CustomSelect";
import IconBuy from "../UI/SvgIcon/IconBuy";

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
  { value: 0.5, label: "normal $0.5", icon: "-" },
  { value: 1.5, label: "priority $1.5", icon: "-" },
];

const BuyForm = () => {
  const [enteredAmountDollar, setEnteredAmountDollar] = useState("");
  const [enteredAmountDollarTouched, setEnteredAmountDollarTouched] =
    useState(false);

  const enteredAmountDollarIsValid = enteredAmountDollar.trim() !== "";
  const AmountDollarInputIsValid =
    !enteredAmountDollarIsValid && enteredAmountDollarTouched;

  const formSumbitHandler = (e) => {
    e.preventDefault();

    if (!enteredAmountDollarIsValid) {
      return;
    }
  };
const amountDollarClasses = AmountDollarInputIsValid ? 'group invalid' : 'group';
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
          buy currency
        </h2>
      </div>
      <Form onSubmit={formSumbitHandler} method="post" className={classes.form}>
        <CustomSelect label="currency:" name="currency" options={currency} />
        <Input
          className={amountDollarClasses}
          input={{
            type: "number",
            name: "amountUSD",
            onChange: (event) => {
              setEnteredAmountDollar(event.target.value);
            },
            onBlur: () => {
              setEnteredAmountDollarTouched(true);
            },
          }}
          label="amountUSD:"
        />
        {AmountDollarInputIsValid && (
          <p className={classes.error}>please enter amount GHC</p>
        )}
        <Input
          className={classes.group}
          input={{
            type: "number",
            name: "amountGHC",

            onChange: (event) => {},
            onBlur: () => {},
          }}
          label="amountGHC:"
        />

        <CustomSelect
          // value={selectMiner}
          name="miner"
          label="miners fee"
          options={miner}
          // onChange={(event) => {
          //   setSelectMiner(event.target.value);
          // }}
        />
        <Input
          className={classes.group}
          input={{
            type: "number",
            name: "totaltopay",
          }}
          label="totaltopay:"
        />
        <Input
          className={classes.group}
          input={{ type: "text", name: "walletAddress" }}
          label="wallet Addres:"
        />
        <CustomSelect name="payment" label="Payment methd:" options={payment} />
        <Button type="submit" className={classes.btn}>
          buy
        </Button>
      </Form>
    </section>
  );
};

export default BuyForm;
