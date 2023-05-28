import React from 'react';
import * as style from './styles';
import { SubTitleFont } from '../../components/style/font';

export default function DetailFinal(props) {
  const { name, side, drink, price } = props.order;

  return (
    <style.DetailFinal>
      <SubTitleFont>{name}</SubTitleFont>
      <hr />
      <SubTitleFont style={{ color: '#DF843E' }}>
        ￦{(price + side.price + drink.price) * props.nums}
      </SubTitleFont>
      <img src={''} />
    </style.DetailFinal>
  );
}
