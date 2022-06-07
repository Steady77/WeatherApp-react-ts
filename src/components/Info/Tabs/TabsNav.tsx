import { FC, PropsWithChildren } from 'react';
import { ITabsNavProps } from '../../../types';

const TabsNav: FC<PropsWithChildren<ITabsNavProps>> = ({
  children,
  tabs,
  selected,
  setSelected,
}) => {
  return (
    <>
      <div className="tabs__content-box">{children}</div>
      <div className="tabs__items">
        {tabs.map((tab: string) => (
          <button
            key={tab}
            onClick={() => setSelected(tab)}
            className={`tabs__item ${tab === selected ? 'tabs__item--active' : ''}`}
          >
            {tab}
          </button>
        ))}
      </div>
    </>
  );
};

export default TabsNav;
