import React, { useEffect, useState } from 'react';
import { SubTitleFontWhite } from '../style/font';
import WhiteBorderButton from '../Button/WhiteBorderButton';
import * as style from './styles';
import WhiteTransButton from '../Button/WhiteTransButton';
import { useRecoilValue, useRecoilState } from 'recoil';
import { ordersAtom } from '../../recoil/Order/atoms';

export default function MenuFooter(props) {
  const [orderlist, setOrderlist] = useRecoilState(ordersAtom);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    setSum(
      orderlist
        .map((order) => order.price * order.number)
        .reduce((prev, curr) => prev + curr, 0),
    );
  }, [orderlist]);

  return (
    <style.MenuFooter>
      <style.orderInfo>
        <SubTitleFontWhite>₩{sum}</SubTitleFontWhite>
        <WhiteTransButton name={'주문내역'} url={'/gotoOrder'} />
      </style.orderInfo>
      <WhiteBorderButton name={'처음으로'} url={'/defaultHome'} />
    </style.MenuFooter>
  );
}
