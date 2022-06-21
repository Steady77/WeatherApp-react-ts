import { IForecastData } from '../../types';

export const setForecastData = (data: IForecastData) => ({
  type: 'SET_FORECAST_DATA',
  payload: data,
});
