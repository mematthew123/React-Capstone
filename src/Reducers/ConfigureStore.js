import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { Authentication } from './Authentication';
import { AccountHolder } from './AccountHolder';
import { CdOfferings } from './CDOfferings';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            authenticate: Authentication,
            accountHolder: AccountHolder,
            cdOfferings: CdOfferings
        }),
        applyMiddleware(thunk)
    );

    return store;
}