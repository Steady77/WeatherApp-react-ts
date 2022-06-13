import { FC, useState } from 'react';
import Tab from './Tab';
import { tabs } from './tabsData';
import TabsNav from './TabsNav';

const Tabs: FC = () => {
  const [selected, setSelected] = useState(tabs[0].name);

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
