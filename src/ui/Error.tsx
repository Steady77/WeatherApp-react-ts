import { FC } from 'react';

interface ErrorProps {
  message: string;
}

const Error: FC<ErrorProps> = ({ message }) => {
  return (
    <div
      className="info__now"
      style={{ fontSize: '22px', textAlign: 'center', paddingTop: '100px' }}
    >
      {message}
      <p style={{ fontSize: '50px' }}>&#128533;</p>
    </div>
  );
};

export default Error;
