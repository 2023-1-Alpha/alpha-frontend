import React from 'react';
import styled from 'styled-components';
import * as style from './styles';
import { useState } from 'react';
import GrayBorderButton from '../../components/Button/GrayBorderButton';
import SelectPayment from '../../components/Pay/SelectPayment';
import CardPayment from '../../components/Pay/CardPayment';
import GiftPayment from '../../components/Pay/GiftPayment';

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

  return (
    <style.Payment count={count}>
      {count === 0 && <SelectPayment add_count={add_count} setPay={setPay} />}
      {count === 1 && selectedPay === 'Credit' && (
        <CardPayment add_count={add_count} />
      )}
      {count === 1 && selectedPay === 'GiftCard' && (
        <GiftPayment add_count={add_count} />
      )}
    </style.Payment>
  );
}
