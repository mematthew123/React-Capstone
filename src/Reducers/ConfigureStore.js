import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { Authentication } from './Authentication';
import { Account } from './Account';
import * as ActionTypes from '../Actions/Types';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            authenticate: Authentication,
            account: Account
        }),
        applyMiddleware(thunk)
    );

    return store;
}