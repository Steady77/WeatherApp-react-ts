import { IWeatherData, IForecastData } from './../types';
import { WEATHER, API_KEY, METRIC, FORECAST, TIMESTAMP, SERVER_URL } from './../utils/consts';
import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from '@reduxjs/toolkit/dist/query/react';

interface CustomError {
  data: {
    message: string;
  };
  status: number;
}

export const API = createApi({
  reducerPath: 'API',
  baseQuery: fetchBaseQuery({ baseUrl: SERVER_URL }) as BaseQueryFn<
    string | FetchArgs,
    unknown,
    CustomError,
    {}
  >,
  endpoints: (build) => ({
    fetchWeather: build.query<IWeatherData, string>({
      query: (city) => ({
        url: WEATHER,
        params: {
          q: city,
          appid: API_KEY,
          units: METRIC,
        },
      }),
    }),
    fetchForecast: build.query<IForecastData, string>({
      query: (city) => ({
        url: FORECAST,
        params: {
          q: city,
          appid: API_KEY,
          units: METRIC,
          cnt: TIMESTAMP,
        },
      }),
    }),
  }),
});
