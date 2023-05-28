import React, { useEffect } from 'react';
import styled from 'styled-components';
import * as style from './styles';
import { useState } from 'react';
import GrayBorderButton from '../../components/Button/GrayBorderButton';
import SelectPayment from '../../components/Pay/SelectPayment';
import CardPayment from '../../components/Pay/CardPayment';
import GiftPayment from '../../components/Pay/GiftPayment';
import { useNavigate } from 'react-router-dom';
import SendOrderModal from '../../components/Pay/Modal/SendOrderModal';

const InnerContainer = styled.div`
  flex: 1;
`;

export default function Payment() {
  const [count, setCount] = useState(0);
  const [selectedPay, setSelectedPay] = useState('');
  const navigate = useNavigate();

  function add_count() {
    if (count === 2) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }
  function setPay(selectedPay) {
    if (selectedPay === 'Credit') {
      setSelectedPay('Credit');
    } else {
      setSelectedPay('GiftCard');
    }
    console.log(selectedPay);
  }

  function reset() {
    setCount(0);
    // 페이지 이동
  }

  function goBack() {
    if (count === 0) {
      navigate('/gotoOrder');
    } else {
      setCount(count - 1);
    }
  }

  return (
    <style.Payment count={count}>
      <InnerContainer>
        {count === 0 && <SelectPayment add_count={add_count} setPay={setPay} />}
        {count === 1 && selectedPay === 'Credit' && <CardPayment />}
        {count === 1 && selectedPay === 'GiftCard' && <GiftPayment />}
      </InnerContainer>
      {count <= 1 && (
        <GrayBorderButton name={'취소'} onClick={() => goBack()} />
      )}
    </style.Payment>
  );
}
