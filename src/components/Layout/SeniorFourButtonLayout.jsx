import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import {
  SeniorSmallButton,
  SeniorGoToHomeButton,
} from '../Button/SeniorButton';

const Container = styled.div`
  height: calc(100vh - 74px);

  padding-top: 38px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoBlock = styled.img`
  margin-bottom: 42px;
  width: 200px;
  height: 200px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 16px;
  margin-bottom: 66px;
`;

export default function SeniorFourButtonLayout({
  firstBtnContent,
  firstBtnOnclick,
  secondBtnContent,
  secondBtnOnclick,
  thirdBtnContent,
  thirdBtnOnclick,
}) {
  const navigate = useNavigate();

  return (
    <Container>
      <LogoBlock
        className="logoImg"
        alt="로고 이미지"
        src={process.env.PUBLIC_URL + '/Images/Main/Logo.svg'}
      />
      <ButtonContainer>
        <SeniorSmallButton onClick={firstBtnOnclick}>
          {firstBtnContent}
        </SeniorSmallButton>
        <SeniorSmallButton onClick={secondBtnOnclick}>
          {secondBtnContent}
        </SeniorSmallButton>
        <SeniorSmallButton onClick={thirdBtnOnclick}>
          {thirdBtnContent}
        </SeniorSmallButton>
      </ButtonContainer>
      <SeniorGoToHomeButton
        onClick={() => {
          navigate('/seniorHome');
        }}
      />
    </Container>
  );
}
