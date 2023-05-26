import React from 'react';
import * as style from './styles';
import WhiteRoundedLargeButton from '../../components/Button/WhiteRoundedLargeButton';

export default function DetailSize(props) {
  function onClick() {
    props.add_count();
  }
  return (
    // 추후에 map으로 데이터 뿌리기
    <style.DetailSize>
      <WhiteRoundedLargeButton
        senior={false}
        imgSrc={props.menuImg}
        text={props.menuName}
        price={props.menuPrice}
        onClick={onClick}
      />
      <WhiteRoundedLargeButton
        senior={false}
        imgSrc={props.menuSetImg}
        text={props.menuSetName}
        price={props.menuSetPrice}
        onClick={onClick}
      />
    </style.DetailSize>
  );
}
