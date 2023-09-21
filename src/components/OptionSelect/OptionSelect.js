import React, { useState } from 'react';
import './OptionSelect.scss';

const OptionSelect = () => {
  const [optionList, setOptionList] = useState();
  const handleOption = e => {
    setOptionList(e.target.value);
  };
  return (
    <div className="optionSelect">
      <p className="op-name">옵션</p>
      <button onClick={handleOption} optionList={optionList} />
    </div>
  );
};

export default OptionSelect;
