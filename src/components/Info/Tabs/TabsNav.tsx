const TabsNav = ({ children, tabs, selected, setSelected }: any) => {
    return (
        <>
            <div className="tabs__content-box">
                {children}
            </div>
            <div className="tabs__items">
                {
                    tabs.map((tab: any) => (
                        <button key={tab} onClick={() => setSelected(tab)}
                            className={`tabs__item ${tab === selected ? 'tabs__item--active' : ''}`}>{tab}</button>
                    ))
                }
            </div>
        </>
    )
}

export default TabsNav