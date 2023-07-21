import { useDispatch, useSelector } from 'react-redux';
import { setQuery, fetchCoins } from "../../action/cryptoActions";
import React, { useEffect } from "react";
import Header from "../Header/Header";
import styles from "./styles.module.css";
import ListItem from "../ListItem/ListItem";

const Main = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.crypto.query);
  const coins = useSelector((state) => state.crypto.coins);
  const searched = useSelector((state) => state.crypto.searched);

  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  const handleQueryChange = (event) => {
    dispatch(setQuery(event.target.value));
  };

  return (
    <div>
      <Header></Header>
      <header className={styles.header}>
        <h2>Search for a coin</h2>
        <input
          className={styles.inp}
          type="text"
          value={query}
          onChange={handleQueryChange}
        ></input>
      </header>

      <h2>{searched ? 'Search Result' : 'Trending Coins'}</h2>
      <div className={styles.coins}>
      
        {coins.length > 0 ? (
          coins.map((coin) => (
            <ListItem key={coin.id} coin={coin} />
          ))
        ) : (
          <p>No coins found.</p>
        )}
      </div>
    </div>
  );
};

export default Main;
