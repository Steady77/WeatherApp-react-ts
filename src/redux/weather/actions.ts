import { IWeatherData } from '../../types';

export const setWeatherData = (data: IWeatherData) => ({
  type: 'SET_WEATHER_DATA',
  payload: data,
});
