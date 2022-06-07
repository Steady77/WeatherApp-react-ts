import { FC } from 'react';
import { INowProps } from '../../../types';

const Now: FC<INowProps> = ({ cityData }) => {
  const hasData = cityData !== null;

  return (
    <div className="info__now">
      <p className="info__now-tepmerature">{hasData && Math.round(cityData?.main.temp)}</p>
      <img
        className="info__now-img"
        src={`http://openweathermap.org/img/wn/${cityData?.weather[0].icon}@4x.png`}
        alt="cloud"
      />
      <div className="info__now-bottom">
        <h4 className="info__now-city">{cityData?.name}</h4>
        <button className="info__now-favorite"></button>
      </div>
    </div>
  );
};

export default Now;
