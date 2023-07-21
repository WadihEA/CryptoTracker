import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from "../../action/coinActions";
import Header from "../Header/Header";
import styles from "./styles.module.css";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Show = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.coin);
  const params = useParams();

  useEffect(() => {
    dispatch(fetchData(params.id));
  }, [dispatch, params.id]);
  
  if (!store.data?.image) return <div></div>;

  return (
    <div>
      <Header></Header>
      <header>
        <img className={styles.img} src={store.data.image.large} alt="Coin"></img>
        <h2>
          {store.data.name} ({store.data.symbol})
        </h2>
      </header>
      <div className={styles.graph}>
        <ResponsiveContainer>
          <AreaChart
            data={store.graphData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Date" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Price"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className={styles.details}>
        <h3>Details</h3>
        <div className={styles.detailItem}>
          <h4>Market Cap Rank</h4>
          <span>{store.data.market_cap_rank}</span>
        </div>
        <div className={styles.detailItem}>
          <h4>24h High</h4>
          <span>{store.data.market_data.high_24h.usd}</span>
        </div>
        <div className={styles.detailItem}>
          <h4>24h Low</h4>
          <span>{store.data.market_data.low_24h.usd}</span>
        </div>
        <div className={styles.detailItem}>
          <h4>Circulating Supply</h4>
          <span>{store.data.market_data.circulating_supply}</span>
        </div>
        <div className={styles.detailItem}>
          <h4>Current Price</h4>
          <span>{store.data.market_data.current_price.usd}</span>
        </div>
        <div className={styles.detailItem}>
          <h4>1y Change</h4>
          <span>{store.data.market_data.price_change_percentage_1y.toFixed(2)}%</span>
        </div>
      </div>
    </div>
  );
};

export default Show;
