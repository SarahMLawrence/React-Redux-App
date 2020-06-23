import {
    FETCHING_IMG_START,
    FETCHING_IMG_SUCCESS
} from "../actions";


const initialState = {
    loading: false, 
    img: null, 
    isFetching: false, 
    error: ""
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_IMG_START:
            return{
                ...state, 
                isFetching: true,
                error: ""
            };

        case FETCHING_IMG_SUCCESS:
            return{
                ...state,
                img: action.payload,
                isFetching: false
            };

        default:
            return state;
    }
}