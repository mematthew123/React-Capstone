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

const postRequestConfig = (token, body) => {
    return {
        method: 'POST',
        headers: {
            'authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }
};

export const postSavings = (token, data) => (dispatch) => {

    return fetch(URLs.addSavings, postRequestConfig(token, data))
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
        .then(result => dispatch(AccountResponse(result)))
        .catch(error => dispatch(AccountFailed(error)));
}

export const postDeleteSavings = (token, data) => (dispatch) => {

    return fetch(URLs.deleteSavings, postRequestConfig(token, data))
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
        .then(result => dispatch(AccountResponse(result)))
        .catch(error => dispatch(AccountFailed(error)));
}

const AccountResponse = (data) => ({
    type: ActionTypes.ACCOUNT,
    payload: data
})

const AccountFailed = (data) => ({
    type: ActionTypes.ACCOUNT_FAILED,
    payload: data
})