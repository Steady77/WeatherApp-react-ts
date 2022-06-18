import { combineReducers, createStore } from '@reduxjs/toolkit';
import { favoriteList } from './reducers/favoriteList';

const reducers = combineReducers({
  favoriteList,
});

const store = createStore(reducers);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
