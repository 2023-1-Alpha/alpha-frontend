import React from 'react';
import styled from 'styled-components';

import {
  SubTitleFontWhite,
  ContentFontLargeWhite,
} from '../components/style/font';

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 190px;
`;

const WhiteBorderButton = styled.div`
  width: 365px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ffffff;
  border-radius: 50px;
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
      <WhiteBorderButton>
        <ContentFontLargeWhite>처음으로</ContentFontLargeWhite>
      </WhiteBorderButton>
    </Container>
  );
}
