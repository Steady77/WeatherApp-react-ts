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
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setSelected(tab.name)}
            className={`tabs__item ${tab.name === selected ? 'tabs__item--active' : ''}`}
          >
            {tab.name}
          </button>
        ))}
      </div>
    </>
  );
};

export default TabsNav;
