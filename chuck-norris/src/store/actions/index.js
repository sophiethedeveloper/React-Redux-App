import axios from "axios";

export const FETCH_QUOTES_START = "FETCH_QUOTES_START";
export const FETCH_QUOTES_SUCCESS = "FETCH_QUOTES_SUCCESS";

export const fetchQuotes = (category) => (dispatch) => {
  dispatch({ type: FETCH_QUOTES_START });
  axios
    .get(category)
    .then((res) => {
      dispatch({ type: FETCH_QUOTES_SUCCESS, payload: res });
    })
    .catch((err) => console.log(err));
};
