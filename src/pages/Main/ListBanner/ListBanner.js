import React from 'react';
import { Link } from 'react-router-dom';
import './ListBanner.scss';

const ListBanner = () => {
  return (
    <section className="list-banner">
      <div className="inner-wrap">
        <Link to="/list?category=pork">
          <span>
            <strong>다양한 정육각 상품을 만나보세요!</strong>
            <span>쇼핑하러 가기</span>
          </span>
          <img
            alt="리스트 배너"
            src={process.env.PUBLIC_URL + `/images/main/@list_banner.png`}
          />
        </Link>
      </div>
    </section>
  );
};

export default ListBanner;
