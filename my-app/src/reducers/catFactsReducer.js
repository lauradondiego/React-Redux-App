import {
  FETCH_CAT_DATA_START,
  FETCH_CAT_DATA_SUCCESS
  // FETCH_WEBCAM_DATA_FAILURE
} from "../actions";
// or whatever makes sense for the api you choose
// see if it is an array or whatever
const initialState = {
  cats: [],
  isLoading: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAT_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FETCH_CAT_DATA_SUCCESS:
      console.log("action", action);
      return {
        ...state,
        isLoading: false,
        cats: action.payload.all,
        error: ""
      };
    default:
      return state;
  }
};
