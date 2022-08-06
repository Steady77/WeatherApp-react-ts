import { RootState, AppDispatch } from './../redux/store';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';

export const useTypedDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
