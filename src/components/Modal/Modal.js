import React from 'react';
import CartModal from './ModalContent/CartModal';
import './Modal.scss';

const Modal = props => {
  const MODAL_DATA = [{ name: 'a', content: <CartModal /> }];

  const { size, index } = props;

  console.log(index);

  // props
  // data-size: xs(width: 500), s(width: 580), m(width: 620), l(width: 680), xl(width: 980)

  return (
    <div className="modal-content" data-size={size}>
      {MODAL_DATA[index]?.content}
    </div>
  );
};

export default Modal;
