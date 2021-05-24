import * as ActionTypes from '../Actions/Types';

export const weather = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_WEATHER:
      return { ...state, weather: action.payload, errMess: null };
    case ActionTypes.WEATHER_FAILED:
      return { ...state, errMess: action.payload };
    default:
      return state;
  }
}

const initialState = {
  weather: { 
    name: '',
    main: {
      temp: 0,
      feels_like: ''
    },
    weather: [
      {
        main: ''
      }
    ]
   },
  errMess: null
}