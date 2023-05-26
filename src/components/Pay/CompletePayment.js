import React from 'react';
import styled from 'styled-components';
import * as style from './styles';
import { SubTitleFontWhite } from '../../components/style/font';

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 190px;
`;

export default function CompletePayment() {
  return (
    <style.CompletePayment>
      <TextContainer>
        <SubTitleFontWhite>주문하신 제품을</SubTitleFontWhite>
        <SubTitleFontWhite>카운터에서 받아주세요</SubTitleFontWhite>
      </TextContainer>
      <img src={'Images/Main/Check.svg'} />
    </style.CompletePayment>
  );
}
