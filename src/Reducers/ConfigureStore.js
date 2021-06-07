import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { Login } from './Login';


export const ConfigureStore = () => {
    const store = createStore(
        Login,
        applyMiddleware(thunk)
    );

    return store;
}