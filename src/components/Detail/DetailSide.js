import React from 'react';
import * as style from './styles';
import WhiteRoundedSmallButton from '../../components/Button/WhiteRoundedSmallButton';
export default function DetailSide(props) {
  function onClickHander(side) {
    props.add_count();
    props.setOrder((prevOrder) => ({
      ...prevOrder,
      side,
    }));
  }

  //백엔드에서 받아오기
  const sideList = [
    {
      src : 'Images/Main/SideChurros.svg',
      name: '츄러스',
      price: 1500,
    },
    {
      src : 'Images/Main/SideFrenchFries.svg',
      name: '감자튀김',
      price: 1200,
    },
  ];

  return (
    <style.DetailSide>
      <style.DetailSideInnerDiv>
        {sideList.map((side) => (
          <WhiteRoundedSmallButton
            imgSrc={side.src}
            text={side.name}
            price={side.price}
            onClick={() => onClickHander(side)}
          />
        ))}
      </style.DetailSideInnerDiv>
    </style.DetailSide>
  );
}
