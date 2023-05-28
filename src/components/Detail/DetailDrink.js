import React from 'react';
import * as style from './styles';
import WhiteRoundedSmallButton from '../Button/WhiteRoundedSmallButton';

export default function DetailDrink(props) {
  function onClickHander(drink) {
    props.add_count();
    props.setOrder((prevOrder) => ({
      ...prevOrder,
      drink,
    }));
  }

  //백엔드에서 받아오기
  const drinkList = [
    {
      name: '우유',
      price: 1000,
    },
    {
      name: '콜라',
      price: 1200,
    },
    {
      name: '사이다',
      price: 1200,
    },
  ];

  return (
    // 추후에 map으로 데이터 뿌리기
    <style.DetailDrink>
      <style.DetailDrinkInnerDiv>
        {drinkList.map((drink) => (
          <WhiteRoundedSmallButton
            imgSrc={''}
            text={drink.name}
            price={drink.price}
            onClick={() => onClickHander(drink)}
          />
        ))}
      </style.DetailDrinkInnerDiv>
    </style.DetailDrink>
  );
}
