import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import LinkGoIcon from '../LinkGoIcon/LinkGoIcon';
import CATEGORY_IMG_DATA from '../../../data/categoryImgData';
import './SubNav.scss';

const SubNav = props => {
  const { handleClose, active } = props;
  const subNavRef = useRef(null);

  const useOutsideClick = ref => {
    useEffect(() => {
      const handleClickOutside = e => {
        if (ref.current && !ref.current.contains(e.target)) {
          handleClose();
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  };
  useOutsideClick(subNavRef);

  return (
    <div className={active ? 'sub-nav active' : 'sub-nav'} ref={subNavRef}>
      <section className="menu-wrap">
        <h1>메뉴</h1>
        <div className="menu-right">
          <LinkGoIcon icon="shopping-cart-black" path="" />
          <button>
            <img
              src={process.env.PUBLIC_URL + `/images/close.png`}
              alt="닫기"
              onClick={handleClose}
            />
          </button>
        </div>
      </section>
      <section className="category-wrap">
        <h2>쇼핑하기</h2>
        <ul className="category-list-wrap">
          {CATEGORY_IMG_DATA.map(list => {
            return (
              <li key={list.id}>
                <Link to={list.path}>
                  <img
                    src={process.env.PUBLIC_URL + list.img}
                    alt={list.text}
                  />
                  {list.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
      <div className="go-mypage-wrap">
        <Link to="/mypage">마이페이지</Link>
      </div>
    </div>
  );
};

export default SubNav;
