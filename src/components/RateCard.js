import React, { useEffect, useState } from "react";
import classes from "./RateCard.module.css";
import axios from 'axios';

const RateCard = () => {
  const [crypto, setcrypto] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false"
      );
        console.log(response)

      const [
        bitcoin,
        ethereum,
        tether,
        binancecoin,
        cardano,
        dogecoin,
        solana,
        litecoin,

      ] = response.data;

      let data = [];
      data.push(
        bitcoin,
        ethereum,
        tether,
        binancecoin,
        cardano,
        dogecoin,
        solana,
        litecoin,

      );
        console.log(data);
      setcrypto(data);
    };
    fetchData();
  }, []);

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
