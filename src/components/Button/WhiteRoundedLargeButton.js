import React from 'react';
import * as style from './styles';
import styled from 'styled-components';
import { SubTitleFont, ContentFontLarge } from '../style/font';

const Text = styled(ContentFontLarge)`
  flex: 1;
  padding: 0 30px;
`;

function WhiteRoundedLargeButton(props) {
  return (
    <style.WhiteRoundedLargeButton onClick={props.onClick}>
      <img src={props.imgSrc} />
      {props.senior ? (
        <SubTitleFont>{props.text}</SubTitleFont>
      ) : (
        <Text>{props.text}</Text>
      )}
      {props.senior ? (
        <SubTitleFont>￦{props.price}</SubTitleFont>
      ) : (
        <ContentFontLarge>￦{props.price}</ContentFontLarge>
      )}
    </style.WhiteRoundedLargeButton>
  );
}

export default WhiteRoundedLargeButton;
