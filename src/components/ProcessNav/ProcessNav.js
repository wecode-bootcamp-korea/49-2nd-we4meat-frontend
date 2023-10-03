import React from 'react';
import PROCESS_NAV_DATA from '../../data/processNavData';
import './ProcessNav.scss';

const ProcessNav = () => {
  return (
    <ul className="process-nav-wrap">
      {PROCESS_NAV_DATA.map(step => {
        return (
          <li
            key={step.id}
            className={window.location.pathname === step.path && 'on'}
          >
            <img src={process.env.PUBLIC_URL + `${step.img}`} alt={step.text} />
            {step.index} . {step.text}
            {step.id !== PROCESS_NAV_DATA.length ? (
              <img
                src={process.env.PUBLIC_URL + '/images/right-arrow.png'}
                alt="방향 화살표"
                className="arrow-img"
              />
            ) : null}
          </li>
        );
      })}
    </ul>
  );
};

export default ProcessNav;
