import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useTypedDispatch } from '../hooks/redux';
import { setCurrentCity } from '../redux/currentCity/currentCitySlice';
import { capitalizeFirstLetter, statsCounter } from '../utils/helpers';

const Header: FC = () => {
  const dispatch = useTypedDispatch();
  const [inputValue, setInputValue] = useState('');

  const onSubmitCity = (event: FormEvent) => {
    event.preventDefault();
    if (!inputValue.trim()) return;

    const city = capitalizeFirstLetter(inputValue).trim();
    statsCounter(city);
    dispatch(setCurrentCity(city));
    setInputValue('');
  };

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="header">
      <form
        onSubmit={onSubmitCity}
        className="form"
      >
        <input
          onChange={onChangeInput}
          value={inputValue}
          className="header__search"
          type="text"
          placeholder="Enter the city"
        />
        <button className="header__search-btn"></button>
      </form>
    </div>
  );
};

export default Header;
