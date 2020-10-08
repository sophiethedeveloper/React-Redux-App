import axios from "axios";

export const FETCH_QUOTES_START = "FETCH_QUOTES_START";
export const FETCH_QUOTES_SUCCESS = "FETCH_QUOTES_SUCCESS";

export const fetchQuotes = (category) => (dispatch) => {
  dispatch({ type: FETCH_QUOTES_START });
  axios
    .get(category)
    .then((res) => {
      console.log(res.data)
      dispatch({ type: FETCH_QUOTES_SUCCESS, payload: res.data });
    })
    .catch((err) => console.log(err));
};
