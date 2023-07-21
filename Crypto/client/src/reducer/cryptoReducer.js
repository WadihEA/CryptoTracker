// reducer.js
const initialState = {
  coins: [],
  trending: [],
  query: "",
  searched: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_QUERY":
      return {
        ...state,
        query: action.payload,
      };
    case "SET_COINS":
      return {
        ...state,
        coins: action.payload,
        searched: action.searched !== undefined ? action.searched : state.searched,
        trending: action.trending !== undefined ? action.trending : state.trending,
      };
    default:
      return state;
  }
};

export default reducer;
