import * as ActionTypes from './Types';
import * as URLs from './Urls';

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

export const postAddIRA = (token, data) => (dispatch) => {

    return fetch(URLs.addIRA, postRequestConfig(token, data))
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

export const postDeleteIRA = (token, data) => (dispatch) => {

    return fetch(URLs.deleteIRA, postRequestConfig(token, data))
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
    type: ActionTypes.ACCOUNTHOLDER,
    payload: data
})

const AccountFailed = (data) => ({
    type: ActionTypes.ACCOUNTHOLDER_FAILED,
    payload: data
})