import React from 'react';
import { Link } from 'react-router-dom';
import './PromotionBanner.scss';

const PromotionBanner = () => {
  return (
    <section className="promotion-banner">
      <div className="inner-wrap">
        <Link to="/">
          <span>
            정육각이 처음이라면 <strong>한달 동안 무료배송</strong>
          </span>
        </Link>
      </div>
    </section>
  );
};

export default PromotionBanner;
