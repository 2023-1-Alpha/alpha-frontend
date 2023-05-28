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

const LargeSideList = {
  data: [
    {
      id: 1,
      name: '감자 튀김 큰 거',
      imgSrc: 'Images/Main/SideFrenchFries.svg',
      price: '',
    },
    {
      id: 2,
      name: '츄러스',
      imgSrc: 'Images/Main/SideChurros.svg',
      price: '+200 원',
    },
    {
      id: 3,
      name: '치즈스틱',
      imgSrc: 'Images/Main/SideCheeseStick.svg',
      price: '+500 원',
    },
    {
      id: 4,
      name: '치킨 너겟',
      imgSrc: 'Images/Main/SideChicken.svg',
      price: '+1000 원',
    },
  ],
};

const SideList = {
  data: [
    {
      id: 1,
      name: '감자 튀김',
      imgSrc: 'Images/Main/SideFrenchFries.svg',
      price: '',
    },
    {
      id: 2,
      name: '츄러스',
      imgSrc: 'Images/Main/SideChurros.svg',
      price: '+700 원',
    },
    {
      id: 3,
      name: '치즈스틱',
      imgSrc: 'Images/Main/SideCheeseStick.svg',
      price: '+1000 원',
    },
    {
      id: 4,
      name: '치킨 너겟',
      imgSrc: 'Images/Main/SideChicken.svg',
      price: '+1500 원',
    },
  ],
};

const OnlySideList = {
  data: [
    {
      id: 1,
      name: '감자 튀김',
      imgSrc: 'Images/Main/SideFrenchFries.svg',
      price: '1200 원',
    },
    {
      id: 2,
      name: '츄러스',
      imgSrc: 'Images/Main/SideChurros.svg',
      price: '1500 원',
    },
    {
      id: 3,
      name: '치즈스틱',
      imgSrc: 'Images/Main/SideCheeseStick.svg',
      price: '2000 원',
    },
    {
      id: 4,
      name: '치킨 너겟',
      imgSrc: 'Images/Main/SideChicken.svg',
      price: '2400 원',
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

export default function SelectSide(props) {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [drink, setDrink] = useState('');
  console.log(state);
  return (
    <Container>
      <LogoImg src={'Images/Main/Logo.svg'} />
      <InfoSpan>사이드를 선택해주세요</InfoSpan>
      <InnerContainer>
        <ButtonContainer>
          {state === 'large' &&
            LargeSideList.data.map((item) => (
              <WhiteRoundedLargeButton
                senior={true}
                imgSrc={item.imgSrc}
                text={item.name}
                price={item.price}
                onClick={() => {
                  navigate('/seniorSelectDrink', { state: 'large' });
                }}
              />
            ))}
          {state === 'small' &&
            SideList.data.map((item) => (
              <WhiteRoundedLargeButton
                senior={true}
                imgSrc={item.imgSrc}
                text={item.name}
                price={item.price}
                onClick={() => {
                  navigate('/seniorSelectDrink', { state: 'small' });
                }}
              />
            ))}
          {state === 'onlySide' &&
            OnlySideList.data.map((item) => (
              <WhiteRoundedLargeButton
                senior={true}
                imgSrc={item.imgSrc}
                text={item.name}
                price={item.price}
                onClick={() => {
                  navigate('/seniorSelectDrink', { state: 'small' });
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
