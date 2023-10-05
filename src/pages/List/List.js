import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import CategoryBanner from './CategoryBanner/CategoryBanner';
import CategoryTab from '../../components/CategoryTab/CategoryTab';
import Products from '../../components/Products/Products';
import CATEGORY_NAME from '../../data/categoryImgData';
import './List.scss';

const List = props => {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get('category');
  const index = CATEGORY_NAME.findIndex(i => i.englishText === category);
  const title = CATEGORY_NAME[index]?.bannerText;
  const image = CATEGORY_NAME[index]?.bannerImg;

  const { getQuantity, quantity } = props;

  return (
    <main id="main" className="list">
      <CategoryBanner title={title} image={image} />
      <section className="category-tab">
        <div className="inner-wrap">
          <CategoryTab />
        </div>
      </section>
      <Products getQuantity={getQuantity} quantity={quantity} />
    </main>
  );
};

export default List;
