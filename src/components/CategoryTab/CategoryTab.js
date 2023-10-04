import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import CATEGORY_NAME from '../../data/categoryImgData';
import './CategoryTab.scss';

const CategoryTab = props => {
  const [tabActive, setTabActive] = useState(CATEGORY_NAME[0].id);
  // const location = useLocation();
  const [categoryParams, setCategoryParams] = useSearchParams();

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

  useEffect(() => {
    if (!categoryParams.has('category') || tabActive === CATEGORY_NAME[0].id) {
      categoryParams.set('category', 'pork');
      setCategoryParams(categoryParams);
    }
  }, [categoryParams, setCategoryParams]);

  const handleActive = category => {
    setTabActive(category.id);

    categoryParams.set('category', category.englishText);
    setCategoryParams(categoryParams);
  };

  return (
    <ul className="category-tab-wrap">
      {CATEGORY_NAME.map(category => {
        return (
          <li
            key={category.id}
            data-index={category.id}
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
