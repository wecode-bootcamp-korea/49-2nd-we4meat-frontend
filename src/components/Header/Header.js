import React, { useState } from 'react';
import LinkGoIcon from './LinkGoIcon/LinkGoIcon';
import Nav from './Nav/Nav';
import LoginItemGroup from './LoginItemGroup/LoginItemGroup';
import SubNavIcon from './SubNavIcon/SubNavIcon';
import SubNav from './SubNav/SubNav';
import './Header.scss';

const Header = () => {
  const [isSubnavOn, setIsSubnavOn] = useState(false);
  const handleOpen = () => {
    setIsSubnavOn(true);
  };
  const handleClose = () => {
    setIsSubnavOn(false);
  };

  return (
    <header className="header">
      <div className="header-wrap inner-wrap">
        <div className="left-wrap">
          <LinkGoIcon iconName="logo-white" text="정사각" scale="big" path="" />
          <ul id="menu-list">
            <Nav text="쇼핑하기" className="shopping-wrap" />
          </ul>
        </div>
        <div className="right-wrap">
          <LoginItemGroup />
          <LinkGoIcon iconName="shopping-cart" path="" />
          <SubNavIcon onClick={handleOpen} />
        </div>
      </div>
      <SubNav
        active={isSubnavOn}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
    </header>
  );
};

export default Header;
