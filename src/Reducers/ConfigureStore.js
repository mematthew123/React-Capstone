import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { Authentication } from './Authentication';
import { Account } from './Account';
import { CdOfferings } from './CDOfferings';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            authenticate: Authentication,
            account: Account,
            cdOfferings: CdOfferings
        }),
        applyMiddleware(thunk)
    );

    return store;
}