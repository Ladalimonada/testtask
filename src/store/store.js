import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './rootReducer';
import { getDataMiddleware } from '../components/Table/middleware';

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(getDataMiddleware)
));