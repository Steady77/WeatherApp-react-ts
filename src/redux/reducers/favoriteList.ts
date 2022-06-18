import { Action } from '../actionTypes';

const initialState = {
  items: new Set(''),
};

export const favoriteList = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        items: new Set(action.payload),
      };
    default:
      return state;
  }
};
