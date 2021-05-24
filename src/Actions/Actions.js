import * as ActionTypes from '../Actions/Types';

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = '&units=imperial&appid=8546481bde1b68d96d587ecfdfc0fc2d';

export const fetchWeather = (cityName) => (dispatch) => {

    // fetch(baseUrl + cityName + API_KEY)
    // .then(response => response.json())
    // .then(data => console.log(data.main.temp));

    fetch(baseUrl + cityName + API_KEY)
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
    .then(data => dispatch(addWeather(data)))
    .catch(error => dispatch(weatherFailed(error.message)));

}

export const addWeather = (weather) => ({
    type: ActionTypes.FETCH_WEATHER,
    payload: weather
});

export const weatherFailed = (errMess) => ({
    type: ActionTypes.WEATHER_FAILED,
    payload: errMess
});