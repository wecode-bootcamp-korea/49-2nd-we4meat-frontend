import React from 'react';
import BigBanner from './BigBanner/BigBanner';
import EventBanners from './EventBanners/EventBanners';
import Products from '../../components/Products/Products';
import ListBanner from './ListBanner/ListBanner';

const Main = props => {
  const { getQuantity, quantity } = props;

  return (
    <main id="main" className="main">
      <BigBanner />
      <EventBanners />
      <Products getQuantity={getQuantity} quantity={quantity} />
      <ListBanner />
    </main>
  );
};

export default Main;
