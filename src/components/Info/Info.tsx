import { FC } from 'react';
import Favorite from './Favorite/Favorite';
import Tabs from './Tabs/Tabs';

const Info: FC = () => {
  return (
    <div className="info">
      <Tabs />
      <Favorite />
    </div>
  );
};

export default Info;
