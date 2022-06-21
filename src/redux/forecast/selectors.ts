import { RootState } from '../store';

export const selectForecastData = (state: RootState) => state.forecast.data;
