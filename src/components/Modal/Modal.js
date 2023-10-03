import React from 'react';
import CartModal from './ModalContent/CartModal';
import './Modal.scss';

const Modal = ({ title, price, scale, isProduct, modalHandler }) => {
  // props
  // title & price: CartModal에 props 전달이 필요하므로 data- 컨벤션을 지키지 않음
  // title: [String] 모달 팝업 타이틀
  // price: [String] 제품 가격(제품 목록 장바구니 버튼 클릭 시)
  // data-scale: xs(width: 500), s(width: 580), m(width: 620), l(width: 680), xl(width: 980)
  // isProduct / ?: [Boolean] 모달 팝업 컨텐츠: isProduct(제품 목록 장바구니 버튼 클릭 시) /
  // modalHandler: [Function] 모달 팝업 열기 및 닫기 기능

  return (
    <section className="modal-popup">
      <div className="modal-backdrop" onClick={modalHandler} />
      <div className="modal-content" data-scale={scale}>
        <button type="button" onClick={modalHandler}>
          닫기
        </button>

        {/* 제품 목록 장바구니 버튼 클릭 시 */}
        {isProduct && <CartModal title={title} price={price} />}
      </div>
    </section>
  );
};

export default Modal;