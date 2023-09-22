import React from 'react';
import { Link } from 'react-router-dom';
import './EventBanner.scss';

const EventBanner = () => {
  return (
    <div className="event-banner">
      <Link to="/">
        <img
          alt="이벤트 배너"
          src={process.env.PUBLIC_URL + `/images/main/@event_banner.png`}
        />
      </Link>
    </div>
  );
};

export default EventBanner;
