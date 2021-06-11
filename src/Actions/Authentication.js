import * as ActionTypes from './Types';
import * as URLs from './Urls';

const postRequestConfig = (body) => {
    return {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }
};

export const login = (username, password) => (dispatch) => {

    return fetch(URLs.login, postRequestConfig({
        username: username,
        password: password
    }))
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ':' + response.statusText);
                error.response = response;
                throw error;
            }
        })
        .then(Response => Response.json())
        .then(token => dispatch(addAuthResponse(token)))
        .catch(error => dispatch(loginFailed(error.message)));

}

const addAuthResponse = (token) => ({
    type: ActionTypes.LOGIN,
    payload: token
});

const loginFailed = (errMess) => ({
    type: ActionTypes.LOGIN_FAILED,
    payload: errMess
});

export const signUp = (username, password) => {

    return fetch(URLs.signUp, postRequestConfig({
        password: password,
        username: username,
        active: true,
        role: 'ROLE_USER'
    }))

}