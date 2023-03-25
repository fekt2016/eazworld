import React, { useState } from "react";
import Table from "../UI/Table";
import classes from "./OrderPage.module.css";
const OrderBuy = [
  {
    date: "4th march, 2023",
    id: "w1",
    currency: "bitcoin",
    amountghc: "1300",
    amountusd: "$100",
    payment: "mtn momo",
    status: "order completed",
  },
  {
    date: "5th march, 2023",
    id: "w2",
    currency: "bitcoin",
    amountghc: "1300",
    amountusd: "$100",
    payment: "mtn momo",
    status: "order completed",
  },
  {
    date: "6th march, 2023",
    id: "w3",
    currency: "bitcoin",
    amountghc: "1300",
    amountusd: "$100",
    payment: "mtn momo",
    status: "order completed",
  },
  {
    date: "6th march, 2023",
    id: "w4",
    currency: "bitcoin cash",
    amountghc: "1300",
    amountusd: "$100",
    payment: "vodafone cash",
    status: "expired",
  },
  {
    date: "6th march, 2023",
    id: "w5",
    currency: "ethereum",
    amountghc: "2600",
    amountusd: "$200",
    payment: "airtel/tigo cash",
    status: "pending",
  },
];
const OrderSell = [
  {
    date: "2nd march, 2023",
    id: "ws1",
    currency: "bitcoin",
    amountghc: "1300",
    amountusd: "$100",
    payment: "mtn momo",
    status: "expired",
  },
  {
    date: "5th march, 2023",
    id: "ws2",
    currency: "bitcoin",
    amountghc: "1300",
    amountusd: "$100",
    payment: "mtn momo",
    status: "order completed",
  },
  {
    date: "6th march, 2023",
    id: "ws3",
    currency: "bitcoin",
    amountghc: "1300",
    amountusd: "$100",
    payment: "mtn momo",
    status: "order completed",
  },
  {
    date: "6th march, 2023",
    id: "ws4",
    currency: "bitcoin cash",
    amountghc: "1300",
    amountusd: "$100",
    payment: "vodafone cash",
    status: "expired",
  },
  {
    date: "3rd march, 2023",
    id: "ws5",
    currency: "ripple",
    amountghc: "2600",
    amountusd: "$200",
    payment: "airtel/tigo cash",
    status: "completed",
  },
];

const OrderPage = () => {
  const [toggleState, setToggleState] = useState(1);


  const clickHandler = (index) => {

    setToggleState(index);
  };
  return (
    <section className={classes.orderpage}>
      <div className={classes.headbox}>
        <h3>Manage Orders</h3>
      </div>
      <div className={classes["order-content"]}>
        <div className={classes.tabs}>
          <button
            onClick={() => clickHandler(1)}
            className={
              toggleState === 1
                ? `${classes.tab} ${classes["active-tab"]}`
                : `${classes.tab}`
            }
          >
            buy orders
          </button>
          <button
            onClick={() => clickHandler(2)}
            className={
              toggleState === 2
                ? `${classes.tab} ${classes["active-tab"]}`
                : `${classes.tab}`
            }
          >
            sell order
          </button>
        </div>
        <div className={classes.tabContent}>
          <div
            className={
              toggleState === 1
                ? `${classes.content} ${classes["active-content"]}`
                : `${classes.content}`
            }
          >
            <h4 className={classes.heading}>sell orders</h4>
            <Table  order={OrderSell}/>


          </div>
          <div
            className={
              toggleState === 2
                ? `${classes.content} ${classes["active-content"]}`
                : `${classes.content}`
            }
          >
            <h4 className={classes.heading}>buy orders</h4>
            <Table  order={OrderBuy}/>

          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderPage;
