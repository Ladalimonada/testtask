export const GET_DATA_REQUEST = 'GET_DATA_REQUEST';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_FAILURE = 'GET_DATA_FAILURE';
export const GET_MORE_DATA_REQUEST = 'GET_MORE_DATA_REQUEST';
export const GET_MORE_DATA_SUCCESS = 'GET_MORE_DATA_SUCCESS';
export const GET_MORE_DATA_FAILURE = 'GET_MORE_DATA_FAILURE';

export const getDataRequest = (query) => ({
    type: GET_DATA_REQUEST,
    payload: query,
});

export const getDataSuccess = (info) => ({
    type: GET_DATA_SUCCESS,
    payload: info,
})

export const getDataFailure = (error) => ({
    type: GET_DATA_FAILURE,
    payload: error,
})

export const getMoreDataRequest = (query) => ({
    type: GET_MORE_DATA_REQUEST,
    payload: query,
});

export const getMoreDataSuccess = (info) => ({
    type: GET_MORE_DATA_SUCCESS,
    payload: info,
})

export const getMoreDataFailure = (error) => ({
    type: GET_MORE_DATA_FAILURE,
    payload: error,
})