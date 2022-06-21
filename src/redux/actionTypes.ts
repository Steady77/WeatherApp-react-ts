import { IForecastData, IWeatherData } from '../types';

export type FavoriteActionType = {
  type: string;
  payload: string;
};

export type CurrentCityActionType = {
  type: string;
  payload: string;
};

export type WeatherDataActionType = {
  type: string;
  payload: IWeatherData;
};

export type ForecastDataActionType = {
  type: string;
  payload: IForecastData;
};
