import React from 'react';
import EventSwiper from '../EventSwiper/EventSwiper';
import EventBanner from '../EventBanner/EventBanner';
import './EventBanners.scss';

const EventBanners = () => {
  return (
    <section className="event-banners">
      <div className="inner-wrap">
        <ul>
          <li>
            <EventSwiper />
          </li>
          <li>
            <EventBanner />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default EventBanners;
