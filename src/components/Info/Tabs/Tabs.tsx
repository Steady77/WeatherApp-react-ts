import { useState } from 'react';
import Tab from './Tab';
import { tabs } from './tabsData';
import TabsNav from './TabsNav';

const Tabs = () => {
  const [selected, setSelected] = useState('Now');

  return (
    <div className="info__tabs tabs">
      <TabsNav
        tabs={tabs}
        selected={selected}
        setSelected={setSelected}
      >
        {tabs.map((tab) => (
          <Tab
            key={tab.name}
            isSelected={selected === tab.name}
          >
            <tab.component />
          </Tab>
        ))}
      </TabsNav>
    </div>
  );
};

export default Tabs;
