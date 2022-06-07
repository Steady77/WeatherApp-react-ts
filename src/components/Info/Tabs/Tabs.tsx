import { FC, useState } from 'react';
import { ITabsProps } from '../../../types';
import Details from '../Details/Details';
import Forecast from '../Forecast/Forecast';
import Now from '../Now/Now';
import Tab from './Tab';
import TabsNav from './TabsNav';

const Tabs: FC<ITabsProps> = ({ cityData, forecastData }) => {
  const [selected, setSelected] = useState('Now');
  const tabs = ['Now', 'Details', 'Forecast'];

  return (
    <div className="info__tabs tabs">
      <TabsNav
        tabs={tabs}
        selected={selected}
        setSelected={setSelected}
      >
        {cityData?.cod !== 200 ? (
          <div className="info__now">Ошибка: {cityData?.message}</div>
        ) : (
          <>
            <Tab isSelected={selected === tabs[0]}>
              <Now cityData={cityData} />
            </Tab>
            <Tab isSelected={selected === tabs[1]}>
              <Details cityData={cityData} />
            </Tab>
            <Tab isSelected={selected === tabs[2]}>
              <Forecast forecastData={forecastData} />
            </Tab>
          </>
        )}
      </TabsNav>
    </div>
  );
};

export default Tabs;
