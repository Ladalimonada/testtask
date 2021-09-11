import { combineReducers } from 'redux';
import { dataReducer } from '../components/Table/reducer';

export const rootReducer = combineReducers({
    data: dataReducer
});