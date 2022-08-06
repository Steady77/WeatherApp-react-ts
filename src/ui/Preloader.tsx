import { FC } from 'react';

const Preloader: FC = () => {
  return (
    <div className="info__now">
      <div className="scaling-circle">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Preloader;
