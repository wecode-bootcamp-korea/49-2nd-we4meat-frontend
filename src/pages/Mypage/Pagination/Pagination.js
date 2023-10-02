import React from 'react';
import './Pagination.scss';

const Pagination = props => {
  const { totalPages, page, setPage } = props;

  const makePaginationButtons = totalPages => {
    let arr = [];
    for (let i = 0; i < totalPages; i++) {
      arr.push(
        <button
          type="button"
          key={i + 1}
          onClick={() => setPage(i + 1)}
          className={page - 1 === i ? 'selected' : ''}
        >
          {i + 1}
        </button>,
      );
    }
    return arr;
  };

  return (
    <div className="pagination">
      <button
        type="button"
        className="first direction"
        onClick={() => setPage(1)}
        disabled={page === 1}
      >
        처음
      </button>
      <button
        type="button"
        className="prev direction"
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        이전
      </button>
      <div className="pagination-number">
        {makePaginationButtons(totalPages)}
      </div>
      <button
        type="button"
        className="next direction"
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
      >
        다음
      </button>
      <button
        type="button"
        className="last direction"
        onClick={() => setPage(totalPages)}
        disabled={page === totalPages}
      >
        끝
      </button>
    </div>
  );
};

export default Pagination;
