import styled from 'styled-components';
import React, { useState } from 'react';
import WhiteRoundedLargeButton from '../../components/Button/WhiteRoundedLargeButton';
import { TitleFontWhite } from '../../components/style/font';
import { SeniorGoToHomeButton } from '../../components/Button/SeniorButton';
import { useLocation, useNavigate } from 'react-router-dom';

const Container = styled.div`
  height: calc(100vh - 74px);
  padding: 37px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;
const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 20px;
`;

const LogoImg = styled.img`
  width: 128px;
  height: 156px;
  margin-top: 28px;
`;

const OnlyDessertList = {
  data: [
    {
      id: 1,
      name: '초코콘',
      imgSrc: 'Images/Main/SideDessertChoco.svg',
      price: '1200 원',
    },
    {
      id: 2,
      name: '소프트콘',
      imgSrc: 'Images/Main/SideDessertSoft.svg',
      price: '1200 원',
    },
    {
      id: 3,
      name: '오레오 스무디',
      imgSrc: 'Images/Main/SideDessertOreo.svg',
      price: '1500 원',
    },
    {
      id: 4,
      name: '딸기 스무디',
      imgSrc: 'Images/Main/SideDessertBerry.svg',
      price: '1000 원',
    },
  ],
};
const InfoSpan = styled.span`
  font-family: 'IBM Plex Sans KR';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 45px;
  text-align: center;
  color: #121212;
  margin-bottom: 12px;
`;

export default function SelectDessert(props) {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [drink, setDrink] = useState('');
  return (
    <Container>
      <LogoImg src={'Images/Main/Logo.svg'} />
      <InfoSpan>디저트를 선택해주세요</InfoSpan>
      <InnerContainer>
        <ButtonContainer>
          {OnlyDessertList.data.map((item) => (
            <WhiteRoundedLargeButton
              senior={true}
              imgSrc={item.imgSrc}
              text={item.name}
              price={item.price}
              onClick={() => {
                navigate('/seniorMakePayments');
              }}
            />
          ))}
        </ButtonContainer>
      </InnerContainer>
      <SeniorGoToHomeButton
        onClick={() => {
          navigate('/seniorHome');
        }}
      >
        <TitleFontWhite>처음부터 다시 주문하기</TitleFontWhite>
      </SeniorGoToHomeButton>
    </Container>
  );
}
