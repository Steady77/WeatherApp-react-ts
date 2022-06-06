const TabsNav = ({ children, tabs, selected, setSelected }: any) => {
  return (
    <>
      <div className="tabs__content-box">{children}</div>
      <div className="tabs__items">
        {tabs.map(({ name }: any) => (
          <button
            key={name}
            onClick={() => setSelected(name)}
            className={`tabs__item ${name === selected ? 'tabs__item--active' : ''}`}
          >
            {name}
          </button>
        ))}
      </div>
    </>
  );
};

export default TabsNav;
