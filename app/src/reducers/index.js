import {
  FETCHING_IMG_START,
  FETCHING_IMG_SUCCESS,
  FETCHING_FACT_START,
  FETCHING_FACT_SUCCESS,
} from "../actions";

const initialState = {
  loading: false,
  message: null,
  fact: null,
  isFetching: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_IMG_START:
      return {
        ...state,
        isFetching: true,
        error: "",
      };

    case FETCHING_IMG_SUCCESS:
      return {
        ...state,
        message: action.payload,
        isFetching: false,
      };

    case FETCHING_FACT_START:
      return {
        ...state,
        isFetching: true,
        error: "",
      };

    case FETCHING_FACT_SUCCESS:
      return {
        ...state,
        fact: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};
