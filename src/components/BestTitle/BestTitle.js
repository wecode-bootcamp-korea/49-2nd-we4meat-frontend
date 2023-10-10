import React from 'react';
import './BestTitle.scss';

function BestTitle(className) {
  return (
    <div>
      <h2 className={`best-title ${className}`}>정사각 베스트 상품</h2>
    </div>
  );
}

export default BestTitle;
