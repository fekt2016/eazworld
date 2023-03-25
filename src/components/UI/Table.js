import React from "react";
import classes from "./Table.module.css";

// const Orders = [
//   {
//     date: "4th march, 2023",
//     id: "w1",
//     currency: "bitcoin",
//     amountghc: "1300",
//     amountusd: "$100",
//     payment: "mtn momo",
//     status: "order completed",
//   },
//   {
//     date: "5th march, 2023",
//     id: "w2",
//     currency: "bitcoin",
//     amountghc: "1300",
//     amountusd: "$100",
//     payment: "mtn momo",
//     status: "order completed",
//   },
//   {
//     date: "6th march, 2023",
//     id: "w3",
//     currency: "bitcoin",
//     amountghc: "1300",
//     amountusd: "$100",
//     payment: "mtn momo",
//     status: "order completed",
//   },
//   {
//     date: "6th march, 2023",
//     id: "w4",
//     currency: "bitcoin cash",
//     amountghc: "1300",
//     amountusd: "$100",
//     payment: "vodafone cash",
//     status: "expired",
//   },
//   {
//     date: "6th march, 2023",
//     id: "w5",
//     currency: "ethereum",
//     amountghc: "2600",
//     amountusd: "$200",
//     payment: "airtel/tigo cash",
//     status: "pending",
//   },
// ];

const Table = (props) => {
  const buyorder = props.order.map((order) => (
    <tr key={order.id}>
      <td>{order.date}</td>
      <td>{order.id}</td>
      <td>{order.currency}</td>
      <td>{order.amountghc}</td>
      <td>{order.amountusd}</td>
      <td>{order.payment}</td>
      <td>{order.status}</td>
    </tr>
  ));

  return (
    <>
      <div className={classes.page}>
        <label htmlFor="page">page: </label>
        <select id="page">
          <option>10</option>
          <option>25</option>
          <option>50</option>
          <option>all</option>
        </select>
      </div>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>date</th>
            <th>order no.</th>
            <th>ecurrency</th>
            <th>amountghc</th>
            <th>amountusd</th>
            <th>payment method</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>{buyorder}</tbody>
      </table>
      <div className={classes.showing}>
        <span>Showing 1 to 6 of 6 entries</span>
        <div>
          <button className={classes.btn}>previous</button>
          <span className={classes.num}>1</span>
          <button className={classes.btn}>next</button>
        </div>
      </div>
    </>
  );
};

export default Table;
