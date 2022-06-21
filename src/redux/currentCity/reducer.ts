import { DEFAULT_CITY } from '../../utils/consts';
import { getFromLocalStorage } from '../../utils/helpers';
import { CurrentCityActionType } from '../actionTypes';

const initialState = {
  name: getFromLocalStorage('city') ?? DEFAULT_CITY,
};

export const currentCity = (state = initialState, action: CurrentCityActionType) => {
  switch (action.type) {
    case 'SET_CURRENT_CITY':
      return {
        name: action.payload,
      };
    default:
      return state;
  }
};
