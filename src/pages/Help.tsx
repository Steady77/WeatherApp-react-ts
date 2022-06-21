import { FC } from 'react';
import { Link } from 'react-router-dom';

const Help: FC = () => {
  return (
    <div className="help">
      <h1>Help</h1>
      <div className="help__text">
        An application for getting an up-to-date weather forecast. To find out the forecast, enter
        the name of the city in the field.
      </div>
      <Link
        className="menu__link"
        to="/"
      >
        Back
      </Link>
    </div>
  );
};

export default Help;
