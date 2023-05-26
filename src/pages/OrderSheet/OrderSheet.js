import React from 'react';
import * as style from './styles';
import Orders from '../../components/OrderSheet/Orders';
import { useNavigate } from 'react-router-dom';
import { SubTitleFontWhite } from '../../components/style/font';
import YellowButton from '../../components/Button/YellowButton';
import WhiteBorderButton from '../../components/Button/WhiteBorderButton';

export default function OrderSheet() {
  const navigate = useNavigate();
  return (
    <style.Wrap>
      <Orders />
      <style.Footer>
        <style.PriceWrap>
          <SubTitleFontWhite>합계</SubTitleFontWhite>
          <SubTitleFontWhite>₩18600</SubTitleFontWhite>
        </style.PriceWrap>
        <style.BtnWrap>
          <WhiteBorderButton
            name={'추가주문'}
            mini="true"
            url={'/selectMenu'}
          />
          <YellowButton
            name={'주문완료'}
            mini="true"
            onClick={() => navigate('/makePayments')}
          />
        </style.BtnWrap>
      </style.Footer>
    </style.Wrap>
  );
}
