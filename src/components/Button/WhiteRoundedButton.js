import React from 'react';
import * as style from './styles';
import { ContentFontLarge } from '../style/font';
import { SubTitleFont } from '../style/font';
export default function WhiteRoundedButton(props) {
  return (
    <style.WhiteRoundedButton onClick={props.onClick} small={props.small}>
      <img src={props.imgSrc} />
      {props.small && <ContentFontLarge>{props.text}</ContentFontLarge>}
      {!props.small && <SubTitleFont>{props.text}</SubTitleFont>}
    </style.WhiteRoundedButton>
  );
}
