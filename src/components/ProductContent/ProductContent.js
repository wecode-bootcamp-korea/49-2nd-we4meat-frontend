import React, { useState } from 'react';
import Tag from '../Tag/Tag';
import ProductImg from '../ProductListImg/ProductImg';
import CartButton from '../CartButton/CartButton';
import Modal from '../Modal/Modal';
import './ProductContent.scss';

function ProductContent({ className, img, inventory, title, price }) {
  const [modalOpen, setModalOpen] = useState(false);

  const modalHandler = () => {
    setModalOpen(prev => !prev);
  };

  return (
    <div className={`product-content ${inventory === 2 ? 'inventory' : ''}`}>
      {title.includes('무항생제') ? <Tag /> : ''}
      <ProductImg img={img} />

      <CartButton onClick={() => setModalOpen(true)} />
      {modalOpen && (
        <Modal
          title={title}
          price={price}
          scale="xs"
          isProduct="true"
          modalHandler={modalHandler}
        />
      )}
    </div>
  );
}

export default ProductContent;
//props
//className: [string]'product-content','inventory' - 상품준비중 class
