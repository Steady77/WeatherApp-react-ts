import { IWeatherData } from '../../types';
import { WeatherDataActionType } from '../actionTypes';

export interface IWeatherState {
  data: IWeatherData | null;
}

const initialState: IWeatherState = {
  data: null,
};

export const weather = (state = initialState, action: WeatherDataActionType) => {
  switch (action.type) {
    case 'SET_WEATHER_DATA':
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
