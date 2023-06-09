import React from 'react';
import * as style from './styles';
import { ContentFontLargeGray } from '../style/font';

export default function YellowButton(props) {
  return (
    <style.YellowButton mini={props.mini} onClick={props.onClick}>
      <ContentFontLargeGray>{props.name}</ContentFontLargeGray>
    </style.YellowButton>
  );
}
