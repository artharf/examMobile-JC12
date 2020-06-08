import {AuthReducer} from './authReducer';
import { combineReducers } from 'redux';
import { fetchReducer } from './kocengReducer';

export default combineReducers({
    auth: AuthReducer,
    data: fetchReducer,
});