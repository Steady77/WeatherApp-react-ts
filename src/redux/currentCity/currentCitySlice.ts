import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_CITY } from '../../utils/consts';
import { getFromLocalStorage } from '../../utils/helpers';

interface CurretCityState {
  name: string;
}

const initialState: CurretCityState = {
  name: getFromLocalStorage('city') ?? DEFAULT_CITY,
};

const currentCitySlice = createSlice({
  name: 'currentCity',
  initialState,
  reducers: {
    setCurrentCity(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
  },
});

export const { setCurrentCity } = currentCitySlice.actions;
export default currentCitySlice.reducer;
