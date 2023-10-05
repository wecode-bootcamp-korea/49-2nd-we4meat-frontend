import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import CATEGORY_NAME from '../../data/categoryImgData';
import { API } from '../../config';
import './CategoryTab.scss';

const CategoryTab = props => {
  const [tabActive, setTabActive] = useState(CATEGORY_NAME[0].id);
  // const location = useLocation();
  const [categoryParams, setCategoryParams] = useSearchParams(
    'category',
    'pork',
  );

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
    const categoryParam = categoryParams.get('category');
    const matchingCategory = CATEGORY_NAME.find(
      category => category.englishText === categoryParam,
    );

    if (matchingCategory) {
      setTabActive(matchingCategory.id);
    }
  }, [categoryParams, tabActive]);

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
