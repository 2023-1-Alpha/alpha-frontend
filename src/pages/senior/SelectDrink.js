import styled from 'styled-components';
import React, { useState } from 'react';
import WhiteRoundedLargeButton from '../../components/Button/WhiteRoundedLargeButton';
import { TitleFontWhite } from '../../components/style/font';
import { SeniorGoToHomeButton } from '../../components/Button/SeniorButton';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

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
const LargeDrinkList = {
  data: [
    {
      id: 1,
      name: '콜라 큰 거',
      imgSrc: 'Images/Main/SideDrinkCoke.svg',
      price: '',
    },
    {
      id: 2,
      name: '사이다 큰 거',
      imgSrc: 'Images/Main/SideDrinkCider.svg',
      price: '',
    },
    {
      id: 3,
      name: '커피',
      imgSrc: 'Images/Main/SideDrinkCoffee.svg',
      price: '+500 원',
    },
    {
      id: 4,
      name: '물',
      imgSrc: 'Images/Main/SideDrinkWater.svg',
      price: '+200 원',
    },
  ],
};
const DrinkList = {
  data: [
    {
      id: 1,
      name: '콜라',
      imgSrc: 'Images/Main/SideDrinkCoke.svg',
      price: '',
    },
    {
      id: 2,
      name: '사이다',
      imgSrc: 'Images/Main/SideDrinkCider.svg',
      price: '',
    },
    {
      id: 3,
      name: '커피',
      imgSrc: 'Images/Main/SideDrinkCoffee.svg',
      price: '+1000 원',
    },
    {
      id: 4,
      name: '물',
      imgSrc: 'Images/Main/SideDrinkWater.svg',
      price: '+700 원',
    },
  ],
};
const OnlyDrinkList = {
  data: [
    {
      id: 1,
      name: '콜라',
      imgSrc: 'Images/Main/SideDrinkCoke.svg',
      price: '1200 원',
    },
    {
      id: 2,
      name: '사이다',
      imgSrc: 'Images/Main/SideDrinkCider.svg',
      price: '1200 원',
    },
    {
      id: 3,
      name: '커피',
      imgSrc: 'Images/Main/SideDrinkCoffee.svg',
      price: '1500 원',
    },
    {
      id: 4,
      name: '물',
      imgSrc: 'Images/Main/SideDrinkWater.svg',
      price: '1000 원',
    },
    {
      id: 5,
      name: '우유',
      imgSrc: 'Images/Main/SideDrinkMilk.svg',
      price: '1500 원',
    },
    {
      id: 6,
      name: '오렌지 주스',
      imgSrc: 'Images/Main/SideDrinkOrange.svg',
      price: '1800 원',
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

export default function SelectDrink(props) {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [drink, setDrink] = useState('');

  return (
    <Container>
      <LogoImg src={'Images/Main/Logo.svg'} />
      <InfoSpan>음료를 선택해주세요</InfoSpan>
      <InnerContainer>
        <ButtonContainer>
          {state === 'large' &&
            LargeDrinkList.data.map((item) => (
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
          {state === 'small' &&
            DrinkList.data.map((item) => (
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
          {state === 'onlyDrink' &&
            OnlyDrinkList.data.map((item) => (
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
