import { FC, FormEvent, useState } from 'react';
import { IHeaderProps } from '../types';

const Header: FC<IHeaderProps> = ({ setCity }) => {
  const [inputValue, setInputValue] = useState('');

  const onSubmitCity = (event: FormEvent) => {
    event.preventDefault();
    if (!inputValue.trim()) return;
    setCity(inputValue.trim());
    setInputValue('');
  };

  return (
    <div className="header">
      <form
        onSubmit={onSubmitCity}
        className="form"
      >
        <input
          onChange={(e) => setInputValue(e.target.value)}
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
