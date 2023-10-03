import React, { useState } from 'react';
import Tag from '../Tag/Tag';
import ProductImg from '../ProductListImg/ProductImg';
import CartButton from '../CartButton/CartButton';
import Modal from '../Modal/Modal';
import './ProductContent.scss';

function ProductContent({ className, img, inventory, title, price }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div
      className={`product-content ${className} ${
        inventory === 2 ? 'inventory' : ''
      }`}
    >
      {title.includes('무항생제') ? <Tag /> : ''}
      <ProductImg img={img} />

      <CartButton onClick={() => setModalOpen(true)} />
      {modalOpen && (
        <>
          <div className="modal-backdrop" onClick={() => setModalOpen(false)} />
          <section className="modal-popup" data-size="xs">
            <button type="button" onClick={() => setModalOpen(false)}>
              닫기
            </button>
            <Modal title={title} price={price} isProduct="true" />
          </section>
        </>
      )}
    </div>
  );
}

export default ProductContent;
//props
//className: [string]'product-content','inventory' - 상품준비중 class
