import React from 'react';
import * as style from './styles';
import WhiteRoundedLargeButton from '../../components/Button/WhiteRoundedLargeButton';

export default function DetailSize(props) {
  const { name, price } = props.orderData;

  const selectLargeHandler = () => {
    props.add_count();
    props.setOrder((prevOrder) => ({
      ...prevOrder,
      name: prevOrder.name + ' 라지 세트',
      price: prevOrder.price + 500,
    }));
  };

  const selectNormalHandler = () => {
    props.add_count();
  };

  return (
    // 추후에 map으로 데이터 뿌리기
    <style.DetailSize>
      <WhiteRoundedLargeButton
        imgSrc={''}
        text={name}
        price={price}
        onClick={selectNormalHandler}
      />
      <WhiteRoundedLargeButton
        imgSrc={''}
        text={name + ' 라지 세트'}
        price={price + 500}
        onClick={selectLargeHandler}
      />
    </style.DetailSize>
  );
}
