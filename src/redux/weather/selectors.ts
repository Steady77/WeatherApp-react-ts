import { RootState } from '../store';

export const selectWeatherData = (state: RootState) => state.weather.data;
