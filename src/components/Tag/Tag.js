import React from 'react';
import './Tag.scss';

function Tag({ className = 'tag' }) {
  return (
    <div className={className}>
      <span>무항생제</span>
    </div>
  );
}

export default Tag;

//props
//className: [string]'tag'
