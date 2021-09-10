import{
    GET_DATA_REQUEST,
    getDataFailure,
    getDataSuccess,
    // GET_MORE_DATA_REQUEST,
    // getMoreDataFailure,
    // getMoreDataSuccess
} from './actions';

export const getDataMiddleware = (store) => (next) => (action) => {
    if (action.type === GET_DATA_REQUEST) {
        fetch('https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json')
        .then((res) => res.json())
        .then((response) =>{
            store.dispatch(getDataSuccess(response));
        })
        .catch((e) => {
            store.dispatch(getDataFailure(e.message))
        });
    }
    next(action);
}

// export const getMoreDataMiddleware = (store) => (next) => (action) => {
//     if (action.type === GET_MORE_DATA_REQUEST) {
//         fetch('http://www.filltext.com/?rows=20&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&adress=%7BaddressObject%7D&description=%7Blorem%7C32')
//         .then((res) => res.json())
//         .then((response) =>{
//             store.dispatch(getMoreDataSuccess(response));
//         })
//         .catch((e) => {
//             store.dispatch(getMoreDataFailure(e.message))
//         });
//     }
//     next(action);
// }