import React from 'react';
import { useLocation } from 'react-router-dom';
import BigBanner from './BigBanner/BigBanner';
import EventBanners from './EventBanners/EventBanners';
import Products from '../../components/Products/Products';
import ListBanner from './ListBanner/ListBanner';

const Main = props => {
  const location = useLocation();
  // const { id, count } = location.state;
  console.log(location.state);

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
