import React from 'react';
import './Review.scss';

const Review = () => {
  return (
    <div className="review">
      <div className="left-area">1</div>

      {/* 이미지 있는 경우만 조건부 렌더링 필요 */}
      <div className="right-area">2</div>
    </div>
  );
};

export default Review;
