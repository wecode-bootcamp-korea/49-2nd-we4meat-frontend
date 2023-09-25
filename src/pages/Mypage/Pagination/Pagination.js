import React from 'react';
import './Pagination.scss';

const Pagination = () => {
  return (
    <section className="pagination">
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
    </section>
  );
};

export default Pagination;
