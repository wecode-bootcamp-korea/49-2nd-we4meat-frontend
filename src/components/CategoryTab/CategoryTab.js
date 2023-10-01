import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import CATEGORY_NAME from '../../data/categoryImgData';
import './CategoryTab.scss';

const CategoryTab = () => {
  const [tabActive, setTabActive] = useState();
  // const location = useLocation();
  // const [searchParams, setSearchParams] = useSearchParams();
  // useEffect(() => {
  //   fetch('url', {
  //     method: 'GET',
  //     header: {
  //       'Content-Type': 'application.json',
  //     },
  //   })
  //     .then(res => res.json())
  //     .then();
  // }, []);
  // 쿼리스트링

  const handleActive = category => {
    setTabActive(category.id);
  };

  return (
    <ul className="category-tab-wrap">
      {CATEGORY_NAME.map(category => {
        return (
          <li
            key={category.id}
            onClick={() => handleActive(category)}
            className={tabActive === category.id && 'on'}
          >
            {category.text}
          </li>
        );
      })}
    </ul>
  );
};

export default CategoryTab;
