import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentCity } from '../redux/currentCity/actions';

const Header: FC = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const onSubmitCity = (event: FormEvent) => {
    event.preventDefault();
    if (!inputValue.trim()) return;

    dispatch(setCurrentCity(inputValue.trim()));
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
