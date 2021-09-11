import {
    GET_DATA_REQUEST,
    GET_DATA_SUCCESS,
    GET_DATA_FAILURE,
    // GET_MORE_DATA_REQUEST,
    // GET_MORE_DATA_SUCCESS,
    // GET_MORE_DATA_FAILURE,
} from './actions';

const initialState = {
    info: [],
    loading: false,
    errorMessage: null,
};

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_SUCCESS: {
            return {
                ...state,
                info: action.payload,
                loading:false,
            };
        }
        case GET_DATA_REQUEST: {
            return {
                ...state,
                loading: true,
                errorMessage: null,
            };
        }
        case GET_DATA_FAILURE: {
            return {
                ...state,
                loading:false,
                errorMessage: action.payload,
            }
        }
        default: return state;
    }
}