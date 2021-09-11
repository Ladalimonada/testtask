import {
    GET_DATA_REQUEST,
    getDataFailure,
    getDataSuccess,
} from './actions';

export const getDataMiddleware = (store) => (next) => (action) => {
    if (action.type === GET_DATA_REQUEST) {
        fetch('https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json')
            .then((res) => res.json())
            .then((response) => {
                store.dispatch(getDataSuccess(response));
            })
            .catch((e) => {
                store.dispatch(getDataFailure(e.message))
            });
    }
    next(action);
}
