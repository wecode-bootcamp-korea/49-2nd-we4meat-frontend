import React, { useEffect, useState } from 'react';
import Tag from '../Tag/Tag';
import ProductImg from '../ProductListImg/ProductImg';
import CartButton from '../CartButton/CartButton';
import Modal from '../Modal/Modal';
import './ProductContent.scss';

function ProductContent({
  id,
  className,
  img,
  inventory,
  title,
  price,
  getQuantity,
  quantity,
}) {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const close = e => {
      if (e.keyCode === 27) {
        setModalOpen(false);
      }
    };
    window.addEventListener('keydown', close);
  }, []);

  const modalHandler = () => {
    setModalOpen(prev => !prev);
  };

  return (
    <div className={`product-content ${inventory === 2 ? 'inventory' : ''}`}>
      {title.includes('무항생제') ? <Tag /> : ''}
      <ProductImg id={id} img={img} title={title} />

      <CartButton onClick={() => setModalOpen(true)} />
      {modalOpen && (
        <Modal
          title={title}
          price={price}
          scale="xs"
          isProduct="true"
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          modalHandler={modalHandler}
          getQuantity={getQuantity}
          quantity={quantity}
          id={id}
        />
      )}
    </div>
  );
}

export default ProductContent;
//props
//className: [string]'product-content','inventory' - 상품준비중 class
