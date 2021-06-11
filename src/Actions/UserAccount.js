import * as ActionTypes from './Types';
import * as URLs from './Urls';

const getRequestConfig = (token) => {
    return {
        headers: {
            'authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }
    }
};

export const fetchAccount = (token) => (dispatch) => {

    return fetch(URLs.account, getRequestConfig(token))
    .then(result => {
        if (result.ok) {
            return result;
        } else {
            var error = new Error(result.status);
            error.response = result;
            throw error;
        }
    })
        .then(result => result.json())
        .then(result => dispatch(fetchAccountResponse(result)))
        .catch(error => dispatch(fetchAccountFailed(error)));
}

const fetchAccountResponse = (data) => ({
    type: ActionTypes.ACCOUNT,
    payload: data
})

const fetchAccountFailed = (data) => ({
    type: ActionTypes.ACCOUNT_FAILED,
    payload: data
})