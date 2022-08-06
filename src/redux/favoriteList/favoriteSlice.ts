import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getFromLocalStorage } from '../../utils/helpers';

interface IFavoriteState {
  items: string[];
}

const initialState: IFavoriteState = {
  items: getFromLocalStorage('favorite') ?? [],
};

export const favoriteListSlice = createSlice({
  name: 'favoriteList',
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<string>) {
      state.items = [...state.items, action.payload];
    },
    deleteFavorite(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item !== action.payload);
    },
  },
});

export const { addFavorite, deleteFavorite } = favoriteListSlice.actions;

export default favoriteListSlice.reducer;
