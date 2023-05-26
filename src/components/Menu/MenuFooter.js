import React from 'react';
import { SubTitleFontWhite } from '../style/font';
import WhiteBorderButton from '../Button/WhiteBorderButton';
import * as style from './styles';
import WhiteTransButton from '../Button/WhiteTransButton';

export default function MenuFooter(props) {
  const onClickMenu = () => {}; // Modal 창

  return (
    <style.MenuFooter>
      <style.orderInfo>
        <SubTitleFontWhite>￦16,900</SubTitleFontWhite>
        <WhiteTransButton name={'주문내역'} />
      </style.orderInfo>
      <WhiteBorderButton name={'처음으로'} url={'/'} small="true" />
    </style.MenuFooter>
  );
}
