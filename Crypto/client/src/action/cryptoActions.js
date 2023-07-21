// actions.js
import axios from "axios";
import debounce from "../helpers/debounce";

export const setQuery = (query) => {
  return async (dispatch, getState) => {
    dispatch({ type: "SET_QUERY", payload: query });
    const { trending } = getState(); // Update here to access the trending property correctly
    
    // if (query.length > 2) {
      console.log("test")
      try {
        const res = await axios.get(
          `https://api.coingecko.com/api/v3/search?query=${query}`
        );
        const coins = res.data.coins.map((coin) => {
          return {
            name: coin.name,
            image: coin.large,
            id: coin.id,
          };
        });

        dispatch({ type: "SET_COINS", payload: coins, searched: true });
      } catch (error) {
        console.error("Error searching coins:", error);
      }
    } 

    }


export const fetchCoins = () => {
  return async (dispatch) => {
    try {
      const [res, btcRes] = await Promise.all([
        axios.get("https://api.coingecko.com/api/v3/search/trending"),
        axios.get(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
        ),
      ]);

      const btcPrice = btcRes.data.bitcoin.usd;

      const coins = res.data.coins.map((coin) => {
        return {
          name: coin.item.name,
          image: coin.item.large,
          id: coin.item.id,
          priceBTC: coin.item.price_btc.toFixed(10),
          priceUSD: (coin.item.price_btc * btcPrice).toFixed(10),
        };
      });

      dispatch({ type: "SET_COINS", payload: coins, trending: coins });
      console.log(coins);
    } catch (error) {
      console.error("Error fetching coins:", error);
    }
  };
};
