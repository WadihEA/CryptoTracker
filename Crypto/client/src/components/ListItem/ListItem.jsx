import { Link } from "react-router-dom";
import React from "react";
import styles from "./styles.module.css";

const ListItem = ({ coin }) => {


  
  return (
    <Link className={styles.coinLink} to={`/${coin.id}`}>
      <div className={styles.coinList}>
        <span>
          <img className={styles.coinImage} src={coin.image} alt="img"></img>
        </span>

        <span className={styles.coinName}> {coin.name}</span>

        {coin.priceBTC && (
          <span className={styles.coinPrice}>
            <span className={styles.btc}>
              <img className={styles.btcImg} src="/bitcoin.png"></img>
              {coin.priceBTC} BTC
            </span>
            <span className={styles.usd}> ({coin.priceUSD} USD)</span>
          </span>
        )}
      </div>
    </Link>
  );
};

export default ListItem;
