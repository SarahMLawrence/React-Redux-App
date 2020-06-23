//ACTION CREATORS
import axios from "axios";

export const FETCHING_IMG_START = "FETCHING_IMG_START";
export const FETCHING_IMG_SUCCESS = "FETCHING_IMG_SUCCESS";
export const FETCHING_IMG_FAILURE = "FETCHING_IMG_FAILURE";

const headers ={
    Accept: "application/json"
};

export const getImg = () => dispatch => {
    dispatch({ type: FETCHING_IMG_START });
    axios
    .get("https://aws.random.cat/meow", { headers })
    .then(res => {
        console.log(res);
        dispatch({ type: FETCHING_IMG_SUCCESS, payload: res.data.img });
    })
    .catch(err => {
        console.log(err);
        dispatch({
            type: FETCHING_IMG_FAILURE,
            payload: err.response.message
        });
    });
};