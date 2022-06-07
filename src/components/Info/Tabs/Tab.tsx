import { FC, PropsWithChildren } from 'react';
import { ITabProps } from '../../../types';

const Tab: FC<PropsWithChildren<ITabProps>> = ({ children, isSelected }) => {
  return <>{isSelected && <div>{children}</div>}</>;
};

export default Tab;
