import { useState } from "react"
import Details from "../Details/Details"
import Forecast from "../Forecast/Forecast"
import Now from "../Now/Now"
import Tab from "./Tab"
import TabsNav from "./TabsNav"


const Tabs = () => {
    const [selected, setSelected] = useState('Now')
    const tabs = ['Now', 'Details', 'Forecast'];

    return (
        <div className="info__tabs tabs">
            <TabsNav tabs={tabs} selected={selected} setSelected={setSelected} >
                <Tab isSelected={selected === tabs[0]} >
                    <Now />
                </Tab>
                <Tab isSelected={selected === tabs[1]} >
                    <Details />
                </Tab>
                <Tab isSelected={selected === tabs[2]} >
                    <Forecast />
                </Tab>
            </TabsNav>
        </div>
    )
}

export default Tabs