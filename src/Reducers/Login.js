import * as ActionTypes from '../Actions/Types';

export const login = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return { ...state, JWT: action.payload, errMess: '' };
    case ActionTypes.LOGIN_FAILED:
      return { ...state, errMess: action.payload, JWT: '' };
    default:
      return state;
  }
}

const initialState = {
  JWT: [],
  errMess: ''
}