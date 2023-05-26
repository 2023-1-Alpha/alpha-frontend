import React from 'react';
import styled from 'styled-components';
import * as style from './styles';
import { useState } from 'react';
import GrayBorderButton from '../../components/Button/GrayBorderButton';
import WhiteBorderButton from '../../components/Button/WhiteBorderButton';
import SelectPayment from '../../components/Pay/SelectPayment';
import PaymentProcess from '../../components/Pay/PaymentProcess';
import CompletePayment from '../../components/Pay/CompletePayment';
import {
  ContentFontLargeGray,
  ContentFontLargeWhite,
} from '../../components/style/font';

export default function Payment() {
  const [count, setCount] = useState(0);
  const [selectedPay, setSelectedPay] = useState('');
  function add_count() {
    if (count === 2) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }
  function reset() {
    setCount(0);
    // 페이지 이동
  }

  return (
    <style.Payment count={count}>
      {count === 0 && <SelectPayment add_count={add_count} />}
      {count === 1 && <PaymentProcess add_count={add_count} />}
      {count === 2 && <CompletePayment />}
      {count <= 1 ? (
        <GrayBorderButton name={'취소'} onClick={reset} />
      ) : (
        <WhiteBorderButton
          onClick={reset}
          small={false}
          name={'처음으로'}
        ></WhiteBorderButton>
      )}
    </style.Payment>
  );
}
