import React from 'react';
import { Link } from 'react-router-dom';
import './BigBanner.scss';

const BigBanner = () => {
  return (
    <section className="big-banner">
      <Link to="/list">
        <span>
          <span>오늘 저녁엔 초신선 어떠세요?</span>
          <strong>
            언제나 초신선
            <br />
            정사각
          </strong>
          <em>전체 상품 보러 가기</em>
        </span>
      </Link>
    </section>
  );
};

export default BigBanner;
