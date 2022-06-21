import { FC } from 'react';
import { Link } from 'react-router-dom';

const Menu: FC = () => {
  return (
    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__item">
          <Link
            className="menu__link"
            to="/help"
          >
            Help
          </Link>
        </li>
        <li className="menu__item">
          <Link
            className="menu__link"
            to="/stats"
          >
            Stats
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
