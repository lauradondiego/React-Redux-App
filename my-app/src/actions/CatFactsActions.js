import axios from "axios";

export const FETCH_CAT_DATA_START = "FETCH_CAT_DATA_START";
export const FETCH_CAT_DATA_SUCCESS = "FETCH_CAT_DATA_SUCCESS";
export const FETCH_CAT_DATA_FAILURE = "FETCH_CAT_DATA_FAILURE";

export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_CAT_DATA_START });
    // axios
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "http://cat-fact.herokuapp.com/facts";

    axios
      .get(proxyurl + url)
      .then(response => {
        // res.data.data
        console.log("cat facts response", response.data);
        dispatch({ type: FETCH_CAT_DATA_SUCCESS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: FETCH_CAT_DATA_FAILURE, payload: error.response });
      });
  };
};
