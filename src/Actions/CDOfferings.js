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

export const getCDOfferings = (token) => (dispatch) => {
    return fetch(URLs.cdOfferings, getRequestConfig(token))
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
    .then(result => dispatch(cdOfferings(result)))
    .catch(error => dispatch(cdOfferingsFailed(error)));
}

const cdOfferings = (data) => ({
    type: ActionTypes.CDOFFERINGS,
    payload: data
})

const cdOfferingsFailed = (data) => ({
    type: ActionTypes.CDOFFERINGS_FAILED,
    payload: data
})