import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import LinkGoIcon from '../LinkGoIcon/LinkGoIcon';
import CATEGORY_IMG_DATA from '../../../data/categoryImgData';
import './SubNav.scss';

const SubNav = props => {
  const { handleClose, active, isLogin } = props;
  const subNavRef = useRef(null);
  const navigate = useNavigate();

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

  const setCategoryURL = e => {
    const categoryValue = e.currentTarget.getAttribute('data-path');
    navigate(`/list?category=${categoryValue}`);
    handleClose();
  };

  return (
    <div className={active ? 'sub-nav active' : 'sub-nav'} ref={subNavRef}>
      <section className="menu-wrap">
        <h1>메뉴</h1>
        <div className="menu-right">
          {/* <LinkGoIcon icon="shopping-cart-black" path="cart" /> */}
          <button>
            <img
              src={process.env.PUBLIC_URL + `/images/close.png`}
              alt="닫기"
              onClick={handleClose}
            />
          </button>
        </div>
      </section>
      <section className="category-nav-wrap">
        <h2>쇼핑하기</h2>
        <ul className="category-list-wrap">
          {CATEGORY_IMG_DATA.map(list => {
            return (
              <li
                key={list.id}
                data-path={list.englishText}
                onClick={setCategoryURL}
              >
                <img src={process.env.PUBLIC_URL + list.img} alt={list.text} />
                {list.text}
              </li>
            );
          })}
        </ul>
      </section>
      <div className="go-mypage-wrap">
        {isLogin && <Link to="/mypage">마이페이지</Link>}
      </div>
    </div>
  );
};

export default SubNav;
