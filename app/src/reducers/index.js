import {
  FETCHING_IMG_START,
  FETCHING_IMG_SUCCESS,
  FETCHING_FACT_START,
  FETCHING_FACT_SUCCESS,
} from "../actions";

const initialState = {
  loading: false,
  file: null,
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
        file: action.payload,
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
