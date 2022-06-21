import { RootState } from '../store';

export const selectCurrentCity = (state: RootState) => state.currentCity.name;
