import axios from "axios";

// Action Types
export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

// Action Creators
export const fetchData = (id) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());

    try {
      const [dataRes, graphRes] = await Promise.all([
        axios.get(
          `https://api.coingecko.com/api/v3/coins/${id}?localization=false&market_data=true`
        ),
        axios.get(
          `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=121`
        ),
      ]);

      const graphData = graphRes.data.prices.map((price) => {
        const [timestamp, p] = price;
        const date = new Date(timestamp).toLocaleDateString("en-us");
        return {
          Date: date,
          Price: p,
        };
      });

      dispatch(fetchDataSuccess(graphData, dataRes.data));
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};

export const fetchDataRequest = () => {
  return {
    type: FETCH_DATA_REQUEST,
  };
};

export const fetchDataSuccess = (graphData, data) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: {
      graphData,
      data,
    },
  };
};

export const fetchDataFailure = (error) => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: {
      error,
    },
  };
};
