import React from 'react';
import * as style from './styles';
import { SubTitleFont } from '../../components/style/font';
export default function DetailFinal(props) {
  return (
    <style.DetailFinal>
      <SubTitleFont>{props.menuSetName}</SubTitleFont>
      <hr />
      <SubTitleFont style={{ color: '#DF843E' }}>
        ￦{props.menuSetPrice}
      </SubTitleFont>
      <img src={props.menuSetImg} />
    </style.DetailFinal>
  );
}
