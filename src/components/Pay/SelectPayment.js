import React from 'react';
import * as style from './styles';
import WhiteRoundedButton from '../../components/Button/WhiteRoundedButton';
import { TitleFont } from '../../components/style/font';

export default function SelectPayment(props) {
  return (
    <style.selectPayment>
      <TitleFont>결제 방법을 선택해주세요</TitleFont>
      <style.BtnContainer>
        <WhiteRoundedButton
          imgSrc={'Images/Main/PayCard.svg'}
          text={'신용카드 결제'}
          small={false}
          onClick={() => {
            props.add_count();
            props.setPay('Credit');
          }}
        />
        <WhiteRoundedButton
          imgSrc={'Images/Main/PayGift.svg'}
          text={'모바일 상품권'}
          small={false}
          onClick={() => {
            props.add_count();
            props.setPay('GiftCard');
          }}
        />
      </style.BtnContainer>
    </style.selectPayment>
  );
}
