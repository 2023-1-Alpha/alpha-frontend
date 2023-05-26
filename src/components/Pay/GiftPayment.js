import styled from 'styled-components';
import React from 'react';
import * as style from './styles';
import { SubTitleFont, TitleFont } from '../../components/style/font';
import { ContentFontLargeWhite } from '../../components/style/font';
import { ContentFontMiddle } from '../../components/style/font';
// font size 이상해 ..
const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 64px;
`;

const BarcordImg = styled.img`
  width: 200px;
  height: 167px;
  margin-top: 192px;
`;

export default function GiftPayment(props) {
  return (
    <style.GiftPayment>
      <TitleFont>결제를 진행해주세요</TitleFont>
      <style.Container>
        <TextContainer>
          <SubTitleFont>모바일 상품권(쿠폰)의 바코드를</SubTitleFont>
          <SubTitleFont>스캔 또는 입력해주세요</SubTitleFont>
        </TextContainer>
        <BarcordImg
          src={'Images/Main/Barcord.svg'}
          onClick={() => {
            props.add_count();
          }}
        />
      </style.Container>
    </style.GiftPayment>
  );
}
