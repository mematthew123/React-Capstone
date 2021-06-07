import * as ActionTypes from '../Actions/Types';

export const Login = (state = {jwt: '', role: '', errMess: ''}, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return { ...state, jwt: action.payload.jwt, role: action.payload.role, errMess: '' };
    case ActionTypes.LOGIN_FAILED:
      return { ...state, errMess: action.payload, jwt: '', role: '' };
    default:
      return state;
  }
}