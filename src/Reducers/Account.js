import * as ActionTypes from '../Actions/Types';

export const Account = (state = { account: null, errMess: '' }, action) => {
  switch (action.type) {
    case ActionTypes.ACCOUNT:
      return { ...state, account: action.payload, errMess: '' };
    case ActionTypes.ACCOUNT_FAILED:
      return { ...state, errMess: action.payload, account: null };
    default:
      return state;
  }
}