import React from 'react';
import { useNavigate } from 'react-router-dom';
import Working from '../../../components/Working/Working';
import Button from '../../../components/Button/Button';
import './PrivacyDetails.scss';

const PrivacyDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="privacy-details">
      <Working />
      <p>서비스 준비에 온 힘을 다하고 있습니다. 조금만 더 기다려주세요.</p>
      <Button
        type="button"
        color="bg-black"
        name="메인으로 가기"
        onClick={() => navigate('/')}
      />
    </div>
  );
};

export default PrivacyDetails;
