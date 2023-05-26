import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  SeniorTitleFont,
  SeniorContentFont,
} from '../../components/style/font';
import { SeniorCancelButton } from '../../components/Button/SeniorButton';
import SendOrderModal from '../../components/Pay/Modal/SendOrderModal';
import { useNavigate } from 'react-router-dom';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 69px;
  padding: 116px 65px 0 65px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const PaymentImg = styled.img`
  width: 350px;
  height: 350px;
`;

export default function SeniorPayment() {
  const [isopen, setIsopen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setIsopen(true);
    }, 2000);
  }, []);

  return (
    <Wrap>
      <SendOrderModal modalIsOpen={isopen} />
      <SeniorTitleFont>결제를 진행해주세요</SeniorTitleFont>
      <Content>
        <SeniorContentFont>카드를 아래 사진처럼 넣어주세요</SeniorContentFont>
        <SeniorContentFont>결제 오류시 카드를 긁어주세요</SeniorContentFont>
      </Content>
      <PaymentImg src={'/Images/Main/seniorPaymentImg.svg'} />
      <SeniorCancelButton
        children={'결제 취소'}
        onClick={() => {
          navigate('/seniorHome');
        }}
      />
    </Wrap>
  );
}
