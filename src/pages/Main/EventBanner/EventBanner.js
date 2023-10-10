import React from 'react';
import { Link } from 'react-router-dom';
import './EventBanner.scss';

const EventBanner = () => {
  return (
    <div className="event-banner">
      <Link to="/">
        <span>
          <strong>
            한번 배송비로
            <br />
            4회 무료배송 받으세요!
          </strong>
          <span>자세히보기 &gt;</span>
        </span>
        <img
          alt="이벤트 배너"
          src={process.env.PUBLIC_URL + `/images/main/@event_banner.png`}
        />
      </Link>
    </div>
  );
};

export default EventBanner;
