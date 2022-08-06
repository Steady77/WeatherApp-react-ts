import favoriteList from './favoriteList/favoriteSlice';
import currentCity from './currentCity/currentCitySlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { API } from '../services/api';

const rootReducer = combineReducers({
  favoriteList,
  currentCity,
  [API.reducerPath]: API.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(API.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
