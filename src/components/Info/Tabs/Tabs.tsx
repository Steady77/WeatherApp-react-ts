import { FC, useState } from 'react';
import Details from '../Details/Details';
import Forecast from '../Forecast/Forecast';
import Now from '../Now/Now';
import Tab from './Tab';
import TabsNav from './TabsNav';

const tabs = ['Now', 'Details', 'Forecast'];

const Tabs: FC = () => {
  const [selected, setSelected] = useState(tabs[0]);

  return (
    <div className="info__tabs tabs">
      <TabsNav
        tabs={tabs}
        selected={selected}
        setSelected={setSelected}
      >
        <Tab isSelected={selected === tabs[0]}>
          <Now />
        </Tab>
        <Tab isSelected={selected === tabs[1]}>
          <Details />
        </Tab>
        <Tab isSelected={selected === tabs[2]}>
          <Forecast />
        </Tab>
      </TabsNav>
    </div>
  );
};

export default Tabs;
