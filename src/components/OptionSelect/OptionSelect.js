import React from 'react';
import './OptionSelect.scss';

const OptionSelect = props => {
  return (
    <div className="optionSelect">
      <p>옵션</p>
      <label htmlFor="thickness">
        <select id="thickness">
          <option>보통(16mm)</option>
          <option>얇게(11mm)</option>
          <option>두껍(24mm)</option>
        </select>
      </label>
    </div>
  );
};

export default OptionSelect;
