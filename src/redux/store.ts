import { weather } from './weather/reducer';
import { forecast } from './forecast/reducer';
import { currentCity } from './currentCity/reducer';
import { combineReducers, createStore } from '@reduxjs/toolkit';
import { favoriteList } from './favoriteList/reducer';

const reducers = combineReducers({
  favoriteList,
  currentCity,
  weather,
  forecast,
});

const store = createStore(
  reducers,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
