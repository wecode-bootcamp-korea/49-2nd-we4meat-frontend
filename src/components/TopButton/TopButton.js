import React from 'react';
import './TopButton.scss';

const TopButton = () => {
  const goToTop = () => {
    window.scroll({
      top: 0,
      // behavior: 'smooth',
    });
  };

  return (
    <button
      className="top-btn"
      type="button"
      aria-label="화면 최상단 이동"
      onClick={goToTop}
    >
      <span>Top</span>
    </button>
  );
};

export default TopButton;
