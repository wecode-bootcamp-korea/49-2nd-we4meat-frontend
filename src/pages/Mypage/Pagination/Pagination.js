import React from 'react';
import './Pagination.scss';

const Pagination = props => {
  console.log(props);

  return (
    <div className="pagination">
      <button type="button" className="prev">
        prev
      </button>
      <div className="pagination-number">
        <span className="present">1</span>
        <span className="total">2</span>
      </div>
      <button type="button" className="next">
        next
      </button>
    </div>
  );
};

export default Pagination;
