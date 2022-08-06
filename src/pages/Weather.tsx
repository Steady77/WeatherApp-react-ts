import { FC } from 'react';
import Header from '../components/Header';
import Info from '../components/Info/Info';
import Menu from '../components/Menu';

const Weather: FC = () => {
  return (
    <>
      <Menu />
      <Header />
      <Info />
    </>
  );
};

export default Weather;
