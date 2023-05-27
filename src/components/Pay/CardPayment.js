import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import * as style from './styles';
import { SubTitleFont, TitleFont } from '../../components/style/font';
import { ContentFontLargeWhite } from '../../components/style/font';
import { ContentFontMiddle } from '../../components/style/font';
import { useNavigate } from 'react-router-dom';
import SendOrderModal from './Modal/SendOrderModal';
// font size 이상해 ..

const RoundedContainer = styled.div`
  width: 224px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #df843e;
  border-radius: 50px;
  margin-top: 96px;
`;
const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 22px;
  gap: 16px;
`;
const TerminalImg = styled.img`
  width: 200px;
  height: 200px;
  margin-top: 60px;
`;

const ArrowImg = styled.img`
  width: 70px;
  margin-top: 46px;
`;

export default function CardPayment(props) {
  const [isopen, setIsopen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setIsopen(true);
    }, 2000);
  }, []);

  return (
    <style.CardPayment>
      <SendOrderModal modalIsOpen={isopen} />
      <TitleFont>결제를 진행해주세요</TitleFont>
      <style.Container>
        <RoundedContainer>
          <ContentFontLargeWhite>IC/체크카드 사용 시</ContentFontLargeWhite>
        </RoundedContainer>
        <TextContainer>
          <ContentFontMiddle>
            카드를 화살표 방향으로 투입구에 넣어주세요
          </ContentFontMiddle>
          <ContentFontMiddle>결제 오류 시 카드를 긁어주세요</ContentFontMiddle>
        </TextContainer>
        <TerminalImg src={'Images/Main/CardTerminal.svg'} />
        <ArrowImg src={'Images/Main/Uparrow.svg'} />
      </style.Container>
    </style.CardPayment>
  );
}
