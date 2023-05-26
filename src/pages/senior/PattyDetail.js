import styled from 'styled-components';
import React, { useState } from 'react';
import WhiteRoundedLargeButton from '../../components/Button/WhiteRoundedLargeButton';
import { TitleFontWhite } from '../../components/style/font';
import { GoBackHomeButton } from '../../components/Button/SeniorButton';

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

const ds = {
  data: [
    {
      id: 1,
      name: 'd1',
      imgSrc: process.env.PUBLIC_URL + '/Images/Main/D1.jpg',
      price: '12',
    },
    {
      id: 2,
      name: 'd2',
      imgSrc: process.env.PUBLIC_URL + '/Images/Main/D2.jpg',
      price: '12',
    },
    {
      id: 3,
      name: 'd3',
      imgSrc: process.env.PUBLIC_URL + '/Images/Main/D3.jpg',
      price: '12',
    },
    {
      id: 4,
      name: 'd4',
      imgSrc: process.env.PUBLIC_URL + '/Images/Main/D4.jpg',
      price: '12',
    },
  ],
};

export default function PattyDetail(props) {
  return (
    <Container>
      <LogoImg src={'Images/Main/Logo.svg'} />
      <InnerContainer>
        <ButtonContainer>
          {ds.data.map((item) => (
            <WhiteRoundedLargeButton
              senior={true}
              imgSrc={item.imgSrc}
              text={item.name}
              price={item.price}
            />
          ))}
        </ButtonContainer>
      </InnerContainer>
      <GoBackHomeButton>
        <TitleFontWhite>처음부터 다시 주문하기</TitleFontWhite>
      </GoBackHomeButton>
    </Container>
  );
}
