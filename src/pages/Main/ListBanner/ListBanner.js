import React from 'react';
import { Link } from 'react-router-dom';
import './ListBanner.scss';

const ListBanner = () => {
  return (
    <section className="list-banner">
      <div className="inner-wrap">
        <Link to="/">
          <img
            alt="리스트 배너"
            src={process.env.PUBLIC_URL + `/images/main/@list_banner.jpg`}
          />
        </Link>
      </div>
    </section>
  );
};

export default ListBanner;
