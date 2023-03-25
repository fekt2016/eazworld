import React, { useEffect, useState } from "react";
import classes from "./RateCard.module.css";
// import axios from 'axios';

const RateCard = () => {
  const [crypto, setcrypto] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false"
      );
      const responseData = await response.json();

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      // ] = responseData;
      const bitcoin = responseData[0];
      const ethereum = responseData[1];
      const tether = responseData[2];
      const binance = responseData[3];
      const litecoin = responseData[15];
      const ripple = responseData[5];
      const bitcoinCash = responseData[29];
      const shiba = responseData[14];
      const cardano = responseData[7];
      const doge = responseData[9];
      const solana = responseData[12];
      const dash = responseData[63];

      let data = [];
      data.push(
        bitcoin,
        ethereum,
        tether,
        binance,
        litecoin,
        ripple,
        bitcoinCash,
        shiba,
        cardano,
        doge,
        solana,
        dash
      );

      setcrypto(data);
      setIsLoading(false);
    };

    fetchData().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loding.....</p>
      </section>
    );
  }
  if (httpError) {
    return (
      <section>
        <p>{httpError}</p>
      </section>
    );
  }
  return (
    <section>
      <ul className={classes.rate}>
        {crypto.map((data) => (
          <li key={data.id} className={classes.card}>
            <div className={classes.header}>
              <img className={classes.img} src={data.image} alt={data.id} />
              <a className={`${classes.btn} ${classes.buy}`} href="/">
                buy
              </a>
              <a className={`${classes.btn} ${classes.sell}`} href="/">
                sell
              </a>
            </div>
            <div className={classes.name}>
              <span className={classes.bitcoin}>{data.symbol}</span>
              <span>{data.name}</span>
            </div>
            <div className={classes.price}>
              <span>{`$${data.current_price.toFixed(2)}`}</span>
              <span
                className={classes.per}
              >{`${data.price_change_percentage_24h.toFixed(2)}%`}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RateCard;
