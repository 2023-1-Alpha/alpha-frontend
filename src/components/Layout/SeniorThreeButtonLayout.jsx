import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { SeniorBigButton, SeniorGoToHomeButton } from '../Button/SeniorButton';

const Container = styled.div`
  padding-top: 38px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoBlock = styled.img`
  margin-bottom: 34px;
  width: 200px;
  height: 200px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
  margin-bottom: 43px;
  padding: 0px 12px;
`;

export default function SeniorThreeButtonLayout({
  firstBtnContent,
  firstBtnOnclick,
  secondBtnContent,
  secondBtnOnclick,
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
        <SeniorBigButton onClick={firstBtnOnclick}>
          {firstBtnContent}
        </SeniorBigButton>
        <SeniorBigButton onClick={secondBtnOnclick}>
          {secondBtnContent}
        </SeniorBigButton>
      </ButtonContainer>
      <SeniorGoToHomeButton
        onClick={() => {
          navigate('/seniorHome');
        }}
      />
    </Container>
  );
}
