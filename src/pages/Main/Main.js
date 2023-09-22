import React from 'react';
import BigBanner from './BigBanner/BigBanner';
import EventBanners from './EventBanners/EventBanners';
import ListBanner from './ListBanner/ListBanner';
import './Main.scss';
import OptionElement from '../../components/OptionElement/OptionElement';

const Main = () => {
  return (
    <main className="main">
      <BigBanner />
      <EventBanners />
      <OptionElement category="구이용" />
      {/* 제품 목록 컴포넌트 공간 */}
      <ListBanner />
    </main>
  );
};

export default Main;
