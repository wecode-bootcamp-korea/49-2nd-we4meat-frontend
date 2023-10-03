import React, { useState } from 'react';
import ProductDescription from '../ProductDescription/ProductDescription';
import ProductReview from '../ProductReview/ProductReview';

const DetailTab = () => {
  const [currentTab, setTab] = useState(0);

  const TAB_DATA = [
    { name: '상품설명', content: <ProductDescription /> },
    { name: '상품리뷰', content: <ProductReview /> },
  ];

  const selectTabHandler = index => {
    setTab(index);
  };

  return (
    <>
      <div className="tabs">
        {TAB_DATA?.map((item, index) => {
          return (
            <button
              type="button"
              key={index}
              className={currentTab === index ? 'selected' : null}
              onClick={() => selectTabHandler(index)}
            >
              {item.name}
            </button>
          );
        })}
      </div>
      <div className="tab-contents">
        <div className="inner-wrap">{TAB_DATA[currentTab]?.content}</div>
      </div>
    </>
  );
};

export default DetailTab;
