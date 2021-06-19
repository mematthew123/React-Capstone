import * as ActionTypes from '../Actions/Types';

export const CdOfferings = (state = { offerings: null, errMess: '' }, action) => {
  switch (action.type) {
    case ActionTypes.CDOFFERINGS:
      return { ...state, offerings: action.payload, errMess: '' };
    case ActionTypes.CDOFFERINGS_FAILED:
      return { ...state, errMess: action.payload, offerings: null };
    default:
      return state;
  }
}