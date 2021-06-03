import * as ActionTypes from '../Actions/Types';

const loginUrl = 'localhost:3000/';
const API_KEY = '&units=imperial&appid=8546481bde1b68d96d587ecfdfc0fc2d';

export const login = (username, password) => (dispatch) => {

    // fetch(baseUrl + cityName + API_KEY)
    // .then(response => response.json())
    // .then(data => console.log(data.main.temp));

    fetch(loginUrl)
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ':' + response.statusText);
            error.response = response;
            throw error;
        }
    },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
    .then(Response => Response.json())
    .then(token => dispatch(addJWT(token)))
    .catch(error => dispatch(loginFailed(error.message)));

}

export const addJWT = (token) => ({
    type: ActionTypes.LOGIN,
    payload: token
});

export const loginFailed = (errMess) => ({
    type: ActionTypes.LOGIN_FAILED,
    payload: errMess
});