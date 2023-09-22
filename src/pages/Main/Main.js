import React from 'react';
import BigBanner from '../../components/BigBanner/BigBanner';
import EventBanners from '../../components/EventBanners/EventBanners';
import ListBanner from '../../components/ListBanner/ListBanner';
import './Main.scss';
import CountSelect from '../../components/CountSelect/CountSelect';

const Main = () => {
  return (
    <main className="main">
      <BigBanner />
      <CountSelect scale="full" />
      <EventBanners />
      {/* 제품 목록 컴포넌트 공간 */}
      <ListBanner />
    </main>
  );
};

export default Main;
