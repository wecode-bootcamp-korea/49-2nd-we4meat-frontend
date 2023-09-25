import React from 'react';
import './PageTitle.scss';

const PageTitle = props => {
  const { title } = props;

  return (
    <h2 className="page-title" tabIndex={0}>
      {title}
    </h2>
  );
};

export default PageTitle;
