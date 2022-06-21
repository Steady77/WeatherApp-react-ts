import { IForecastData } from '../../types';
import { ForecastDataActionType } from '../actionTypes';

export interface IForecastState {
  data: IForecastData | null;
}

const initialState: IForecastState = {
  data: null,
};

export const forecast = (state = initialState, action: ForecastDataActionType) => {
  switch (action.type) {
    case 'SET_FORECAST_DATA':
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
