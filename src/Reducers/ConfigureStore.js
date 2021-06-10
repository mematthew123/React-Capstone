import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { Authentication } from './Authentication';


export const ConfigureStore = () => {
    const store = createStore(
        Authentication,
        applyMiddleware(thunk)
    );

    return store;
}