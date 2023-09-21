import React from 'react';
import LinkGoIcon from './LinkGoIcon/LinkGoIcon';
import Nav from './Nav/Nav';
import LoginItemGroup from './LoginItemGroup/LoginItemGroup';
import SubNav from './SubNav/SubNav';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <div className="header-wrap inner-wrap">
        <div className="left-wrap">
          <LinkGoIcon iconName="logo-white" text="정사각" scale="big" nav="" />
          <ul>
            <Nav text="쇼핑하기" className="shopping-wrap" />
          </ul>
        </div>
        <div className="right-wrap">
          <LoginItemGroup />
          <LinkGoIcon iconName="shopping-cart" nav="" />
          <SubNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
