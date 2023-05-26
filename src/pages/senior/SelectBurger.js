import styled from 'styled-components';
import React, { useState } from 'react';
import WhiteRoundedLargeButton from '../../components/Button/WhiteRoundedLargeButton';
import { TitleFontWhite } from '../../components/style/font';
import { SeniorGoToHomeButton } from '../../components/Button/SeniorButton';

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

const MBSetList = {
  // 고기 버거 세트
  data: [
    {
      id: 1,
      name: '베이컨 스테이크 버거 세트',
      imgSrc: 'Images/Main/MBSetBacon.svg',
      price: '6900',
    },
    {
      id: 2,
      name: '치즈 버거 세트',
      imgSrc: 'Images/Main/MBSetCheese.svg',
      price: '6200',
    },
    {
      id: 3,
      name: '뷸고기 버거 세트',
      imgSrc: 'Images/Main/MBSetBulgogi.svg',
      price: '6400',
    },
    {
      id: 4,
      name: '더블 불고기 버거 세트',
      imgSrc: 'Images/Main/MBSetDBulgogi.svg',
      price: '6900',
    },
  ],
};
const MBList = {
  // 고기 버거
  data: [
    {
      id: 1,
      name: '베이컨 스테이크 버거',
      imgSrc: 'Images/Main/MBBacon.svg',
      price: '5400',
    },
    {
      id: 2,
      name: '치즈 버거',
      imgSrc: 'Images/Main/MBCheese.svg',
      price: '4700',
    },
    {
      id: 3,
      name: '뷸고기 버거',
      imgSrc: 'Images/Main/MBBulgogi.svg',
      price: '4900',
    },
    {
      id: 4,
      name: '더블 불고기 버거',
      imgSrc: 'Images/Main/MBDBulgogi.svg',
      price: '5400',
    },
  ],
};

const CBSetList = {
  // 치킨 버거 세트
  data: [
    {
      id: 1,
      name: '크리스피 디럭스 버거 세트',
      imgSrc: 'Images/Main/CBSetDeluxe.svg',
      price: '6700',
    },
    {
      id: 2,
      name: '닭가슴살 버거 세트',
      imgSrc: 'Images/Main/CBSetBreast.svg',
      price: '6300',
    },
    {
      id: 3,
      name: '핫 크리스피 버거 세트',
      imgSrc: 'Images/Main/CBSetHot.svg',
      price: '6600',
    },
    {
      id: 4,
      name: '더블 크리스피 버거 세트',
      imgSrc: 'Images/Main/CBSetDouble.svg',
      price: '6900',
    },
  ],
};

const CBList = {
  // 치킨 버서
  data: [
    {
      id: 1,
      name: '크리스피 디럭스 버거',
      imgSrc: 'Images/Main/CBDeluxe.svg',
      price: '5200',
    },
    {
      id: 2,
      name: '닭가슴살 버거',
      imgSrc: 'Images/Main/CBBreast.svg',
      price: '4800',
    },
    {
      id: 3,
      name: '핫 크리스피 버거',
      imgSrc: 'Images/Main/CBHot.svg',
      price: '5100',
    },
    {
      id: 4,
      name: '더블 크리스피 버거',
      imgSrc: 'Images/Main/CBDouble.svg',
      price: '5400',
    },
  ],
};

const SBSetList = {
  // 새우 버거 세트
  data: [
    {
      id: 1,
      name: '슈슈 버거 세트',
      imgSrc: 'Images/Main/SBSetSS.svg',
      price: '6300',
    },
    {
      id: 2,
      name: '슈슈 디럭스 버거 세트',
      imgSrc: 'Images/Main/SBSetDeluxe.svg',
      price: '6800',
    },
    {
      id: 3,
      name: '쉬림프 버거 세트',
      imgSrc: 'Images/Main/SBSetSB.svg',
      price: '6500',
    },
    {
      id: 4,
      name: '슈비 버거 세트',
      imgSrc: 'Images/Main/SBSetSBB.svg',
      price: '6300',
    },
  ],
};

const SBList = {
  // 새우 버거
  data: [
    {
      id: 1,
      name: '슈슈 버거',
      imgSrc: 'Images/Main/SBSS.svg',
      price: '4800',
    },
    {
      id: 2,
      name: '슈슈 디럭스 버거',
      imgSrc: 'Images/Main/SBDeluxe.svg',
      price: '5300',
    },
    {
      id: 3,
      name: '쉬림프 버거',
      imgSrc: 'Images/Main/SBSB.svg',
      price: '5000',
    },
    {
      id: 4,
      name: '슈비 버거',
      imgSrc: 'Images/Main/SBSBB.svg',
      price: '4800',
    },
  ],
};

export default function SelectBurger(props) {
  return (
    <Container>
      <LogoImg src={'Images/Main/Logo.svg'} />
      <InnerContainer>
        <ButtonContainer>
          {MBList.data.map((item) => (
            <WhiteRoundedLargeButton
              senior={true}
              imgSrc={item.imgSrc}
              text={item.name}
              price={item.price}
            />
          ))}
        </ButtonContainer>
      </InnerContainer>
      <SeniorGoToHomeButton>
        <TitleFontWhite>처음부터 다시 주문하기</TitleFontWhite>
      </SeniorGoToHomeButton>
    </Container>
  );
}
