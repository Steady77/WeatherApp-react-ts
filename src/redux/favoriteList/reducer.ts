import { getFromLocalStorage } from '../../utils/helpers';
import { FavoriteActionType } from '../actionTypes';

interface IFavoriteState {
  items: string[];
}

const initialState: IFavoriteState = {
  items: getFromLocalStorage('favorite') ?? [],
};

export const favoriteList = (state = initialState, action: FavoriteActionType) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return {
        items: [...state.items, action.payload],
      };
    case 'DELETE_FAVORITE':
      return {
        items: state.items.filter((item) => item !== action.payload),
      };
    default:
      return state;
  }
};
