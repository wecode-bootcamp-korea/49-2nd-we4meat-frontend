import React, { useState, useEffect } from 'react';
import Button from '../../Button/Button';

const ChargeModal = ({ title, modalHandler, modalOpen, setModalOpen }) => {
  return (
    <>
      <div className="charge-modal">
        <h1 tabIndex={0}>{title}</h1>
      </div>
      <Button color="bg-gray" full="full" name="충전하기" />
    </>
  );
};

export default ChargeModal;
