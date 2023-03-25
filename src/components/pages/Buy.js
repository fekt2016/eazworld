import React from "react";
import BuyForm from "../Dashboard/BuyForm";

const Buy = () => {
  return (
    <>
      <BuyForm />
    </>
  );
};

export default Buy;

export async function action({ request }) {
  console.log(request);
  const data = await request.formData();

  const buyData = {
    currency: data.get("currency"),
    amountUSD: data.get("amountUSD"),
    amountGHC: data.get("amountGHC"),
    miner: data.get("miner"),
    totaltopay: data.get("totaltopay"),
    walletAddress: data.get("walletAddress"),
    payment: data.get("payment"),
  };
  console.log(buyData.amountGHC);
  console.log(buyData);

  // const response = await fetch("http://127.0.0.1:5000/api/v1/buycurrencies", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(buyData),
  // });
  // if (!response.ok) {
  //   throw new Error("Check your order details");
  // }
  // const resdata = await response.json();
  // console.log(resdata);
}
