import { FC } from 'react';
import { IInfoProps } from '../../types';
import Favorite from './Favorite/Favorite';
import Tabs from './Tabs/Tabs';

const Info: FC<IInfoProps> = ({ cityData, forecastData }) => {
  return (
    <div className="info">
      <Tabs
        cityData={cityData}
        forecastData={forecastData}
      />
      <Favorite />
    </div>
  );
};

export default Info;
