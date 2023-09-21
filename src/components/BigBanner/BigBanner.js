import React from 'react';
import { Link } from 'react-router-dom';
import './BigBanner.scss';

const BigBanner = () => {
  return (
    <section class="big-banner">
      <Link to="/">빅 배너</Link>
    </section>
  );
};

export default BigBanner;
