import React from 'react';
import CartModal from './ModalContent/CartModal';
import ReviewModal from './ModalContent/ReviewModal';
import ChargeModal from './ModalContent/ChargeModal';
import ReviewCreateModal from './ModalContent/ReviewCreateModal';
import './Modal.scss';

const Modal = ({
  id,
  title,
  price,
  scale,
  isProduct,
  isReview,
  isCharge,
  isReviewCreate,
  modalHandler,
  modalOpen,
  setModalOpen,
  getQuantity,
  quantity,
  // wallet,
}) => {
  // props
  // title & price: CartModal에 props 전달이 필요하므로 data- 컨벤션을 지키지 않음
  // title: [String] 모달 팝업 타이틀
  // price: [String] 제품 가격(제품 목록 장바구니 버튼 클릭 시)
  // data-scale: xs(width: 500), s(width: 580), m(width: 620), l(width: 680), xl(width: 980)
  // isProduct / isReview / isReviewCreate: [Boolean] 모달 팝업 컨텐츠: isProduct(제품 목록 장바구니 버튼 클릭 시) / 리뷰 목록 팝업 컨텐츠: isReview(제품 상세 > 리뷰 목록 클릭 시) / 리뷰 작성 팝업 컨텐츠: isReviewCreate(마이페이지 > 주문 상세 > 리뷰 작성하기 버튼 클릭 시)
  // modalHandler: [Function] 모달 팝업 열기 및 닫기 기능

  return (
    <section className="modal-popup" autoFocus>
      <div className="modal-backdrop" onClick={modalHandler} />
      <div className="modal-content" data-scale={scale}>
        <button type="button" onClick={modalHandler}>
          닫기
        </button>

        {/* 제품 목록 장바구니 버튼 클릭 시 */}
        {isProduct && (
          <CartModal
            id={id}
            title={title}
            price={price}
            modalHandler={modalHandler}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            getQuantity={getQuantity}
            quantity={quantity}
          />
        )}

        {/* 제품 상세 > 리뷰 목록 클릭 시 */}
        {isReview && <ReviewModal />}
        {isCharge && (
          <ChargeModal
            title="충천하기"
            // wallet={wallet}
            modalHandler={modalHandler}
            // setModalOpen={setModalOpen}
          />
        )}
        {/* 마이페이지 > 주문 상세 > 리뷰 작성하기 버튼 클릭 시 */}
        {isReviewCreate && <ReviewCreateModal />}
      </div>
    </section>
  );
};

export default Modal;
