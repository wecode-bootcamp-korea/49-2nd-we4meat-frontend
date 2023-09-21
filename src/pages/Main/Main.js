import React from 'react';
import './Main.scss';
import '../../components/OptionSelect/OptionSelect';

import Event from '../../components/Event/Event';
import OptionSelect from '../../components/OptionSelect/OptionSelect';

const Main = () => {
  return (
    <div className="main">
      <Event />
      <OptionSelect />
    </div>
  );
};

export default Main;
