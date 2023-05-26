import React from 'react';
import * as style from './styles';
import { SubTitleFont } from '../../components/style/font';

export default function DetailFinal(props) {
  const { name, side, drink, price } = props.order;
  // props.setOrder((prevOrder) => ({
  //   ...prevOrder,
  //   price: prevOrder.price + prevOrder.side.price + prevOrder.drink.price,
  // }));

  return (
    <style.DetailFinal>
      <SubTitleFont>{name}</SubTitleFont>
      <hr />
      <SubTitleFont style={{ color: '#DF843E' }}>
        ￦{price + side.price + drink.price}
      </SubTitleFont>
      <img src={''} />
    </style.DetailFinal>
  );
}
