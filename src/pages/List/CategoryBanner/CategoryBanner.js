import React from 'react';
import './CategoryBanner.scss';

const CategoryBanner = ({ title, image }) => {
  return (
    <section
      className="category-banner"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="inner-wrap">
        <h2>{title}</h2>
      </div>
    </section>
  );
};

export default CategoryBanner;
