import * as ActionTypes from '../Actions/Types';

export const AccountHolder = (state = { accountHolder: null, errMess: '' }, action) => {
  switch (action.type) {
    case ActionTypes.ACCOUNTHOLDER:
      return { ...state, accountHolder: action.payload, errMess: '' };
    case ActionTypes.ACCOUNTHOLDER_FAILED:
      return { ...state, errMess: action.payload, accountHolder: null };
    default:
      return state;
  }
}