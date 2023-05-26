import React from 'react';
import styled from 'styled-components';

import {
  SubTitleFontWhite,
  ContentFontLargeWhite,
} from '../components/style/font';
import WhiteBorderButton from '../components/Button/WhiteBorderButton';

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 190px;
`;

export const Container = styled.div`
  height: calc(100vh - 74px);
  padding: 37px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #df843e;
`;
export const InnerContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  flex: 1;
  > img {
    width: 200px;
    margin-top: 140px;
  }
`;

export default function CompletePayment() {
  return (
    <Container>
      <InnerContainer>
        <TextContainer>
          <SubTitleFontWhite>주문하신 제품을</SubTitleFontWhite>
          <SubTitleFontWhite>카운터에서 받아주세요</SubTitleFontWhite>
        </TextContainer>
        <img src={'Images/Main/Check.svg'} />
      </InnerContainer>
      <WhiteBorderButton name={'처음으로'} />
    </Container>
  );
}
