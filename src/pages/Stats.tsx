import { FC } from 'react';
import { Link } from 'react-router-dom';
import { getFromLocalStorage, mostRequestedCity, stringOfUniqueCities } from '../utils/helpers';

const Stats: FC = () => {
  const cities = Object.keys(getFromLocalStorage('stats') ?? {});
  const citiesEntries = Object.entries(getFromLocalStorage('stats') ?? {});
  const [city, count] = mostRequestedCity(citiesEntries);

  return (
    <div>
      <h1>Stats</h1>
      <h2>
        Most requested:{' '}
        {city && (
          <span className="stats__result">
            {city} (times: {count})
          </span>
        )}
      </h2>
      <h2>
        All cities viewed: <span className="stats__result">{stringOfUniqueCities(cities)}</span>
      </h2>
      <Link
        className="menu__link"
        to="/"
      >
        Back
      </Link>
    </div>
  );
};

export default Stats;
