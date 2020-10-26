import React from 'react';

// components
import Icons from './Icons';

const ListItems = ({ iconName, ItemName, activeState }) => {
  return (
    <li className={`side-nav__item ${activeState}`}>
      <a href="#" className="side-nav__link">
        <Icons name={iconName} className="side-nav__icon" />
        <span>{ItemName}</span>
      </a>
    </li>
  );
};

function SidebarNavigationCmp() {
  return (
    <ul className="side-nav">
      <ListItems
        ItemName="Hotel"
        iconName="icon-home"
        activeState="side-nav__item--active"
      />
      <ListItems ItemName="Flight" iconName="icon-aircraft-take-off" />
      <ListItems ItemName="Car rental" iconName="icon-key" />
      <ListItems ItemName="Tours" iconName="icon-map" />
    </ul>
  );
}

export default SidebarNavigationCmp;
