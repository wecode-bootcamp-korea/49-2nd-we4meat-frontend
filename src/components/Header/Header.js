import React, { useState } from 'react';
import LinkGoIcon from './LinkGoIcon/LinkGoIcon';
import Nav from './Nav/Nav';
import LoginItemGroup from './LoginItemGroup/LoginItemGroup';
import SubNavIcon from './SubNavIcon/SubNavIcon';
import SubNav from './SubNav/SubNav';
import './Header.scss';

const Header = props => {
  const [isSubnavOn, setIsSubnavOn] = useState(false);
  const handleOpen = () => {
    setIsSubnavOn(true);
  };
  const handleClose = () => {
    setIsSubnavOn(false);
  };

  const { isModal, isLogin } = props;

  return (
    <header className="header" data-modal={isModal}>
      <div className="header-wrap inner-wrap">
        <div className="left-wrap">
          <LinkGoIcon icon="logo-white" text="정사각" scale="big" path="" />
          <ul id="menu-list">
            <Nav
              text="쇼핑하기"
              className="shopping-wrap"
              path="list?category=pork"
            />
          </ul>
        </div>
        <div className="right-wrap">
          <LoginItemGroup isLogin={isLogin} />
          <LinkGoIcon
            icon="shopping-cart"
            path="cart"
            quantity={props?.quantity || 0}
          />
          <SubNavIcon onClick={handleOpen} />
        </div>
      </div>
      {isSubnavOn === true && (
        <SubNav
          active={isSubnavOn}
          isLogin={isLogin}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
      )}
    </header>
  );
};

export default Header;
