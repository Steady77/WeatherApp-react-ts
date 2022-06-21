import { RootState } from '../store';

export const selectFavoriteList = (state: RootState) => state.favoriteList.items;
