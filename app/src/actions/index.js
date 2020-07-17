//ACTION CREATORS
import axios from "axios";

export const FETCHING_IMG_START = "FETCHING_IMG_START";
export const FETCHING_IMG_SUCCESS = "FETCHING_IMG_SUCCESS";
export const FETCHING_IMG_FAILURE = "FETCHING_IMG_FAILURE";

export const FETCHING_FACT_START = "FETCHING_FACT_START";
export const FETCHING_FACT_SUCCESS = "FETCHING_FACT_SUCCESS";
export const FETCHING_FACT_FAILURE = "FETCHING_FACT_FAILURE";

const headers ={
    Accept: "application/json"
};

export const getImg = () => dispatch => {
    dispatch({ type: FETCHING_IMG_START });
    axios
    
    .get("https://dog.ceo/api/breeds/image/random", { headers })
    //"https://aws.random.cat/meow"
    .then(res => {
        console.log(res);
        dispatch({ type: FETCHING_IMG_SUCCESS, payload: res.data.message });
    })
    .catch(err => {
        console.log(err);
        // dispatch({
        //     type: FETCHING_IMG_FAILURE,
        //     payload: err.response.message
        // });
    });
};


export const getFact = () => dispatch => {
    dispatch({ type: FETCHING_FACT_START });
    axios
    .get("https://catfact.ninja/fact", { headers })
    .then(res => {
        console.log(res);
        dispatch({ type: FETCHING_FACT_SUCCESS, payload: res.data.fact });
    })
    .catch(err => {
        console.log(err);
        // dispatch({
        //     type: FETCHING_FACT_FAILURE,
        //     payload: err.response
        // });
    });
};
