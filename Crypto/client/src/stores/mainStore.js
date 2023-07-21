// import { create } from "zustand";
// import axios from "axios";
// import debounce from "../helpers/debounce";

// const mainStore = create((set) => ({
//   coins: [],
//   trending: [],
//   query: "",
//   searched: false,

//   setQuery: (e) => {
//     set({ query: e.target.value });
//     mainStore.getState().searchCoin();
//   },

//   searchCoin: debounce(async () => {
//     const { query, trending } = mainStore.getState();

//     if (query.length > 2) {
//       const res = await axios.get(
//         `https://api.coingecko.com/api/v3/search?query=${query}`
//       );
//       const coins = res.data.coins.map((coin) => {
//         return {
//           name: coin.name,
//           image: coin.large,
//           id: coin.id,
//         };
//       });

//       set({ coins, searched: true });
//     } else {
//       set({ coins: trending, searched: false  });
//     }
//   }, 500),

//   fetchCoins: async () => {
//     const [res, btcRes] = await Promise.all([
//       axios.get("https://api.coingecko.com/api/v3/search/trending"),
//       axios.get(
//         `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`
//       ),
//     ]);

//     const btcPrice = btcRes.data.bitcoin.usd;

//     const coins = res.data.coins.map((coin) => {
//       return {
//         name: coin.item.name,
//         image: coin.item.large,
//         id: coin.item.id,
//         priceBTC: coin.item.price_btc.toFixed(10),
//         priceUSD: (coin.item.price_btc * btcPrice).toFixed(10),
//       };
//     });
//     set({ coins, trending: coins });
//     console.log(coins);
//   },
// }));

// export default mainStore;
