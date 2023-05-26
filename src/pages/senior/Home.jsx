import React from 'react';
import styled from 'styled-components';

import WhiteRoundedButton from '../../components/Button/WhiteRoundedButton';
import { SubTitleFont } from '../../components/style/font';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SeniorBigButton } from '../../components/Button/SeniorButton';

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
`;

export default function SeniorMain() {
  const [userType, setUserType] = useState('');

  const navigate = useNavigate();

  return (
    <Container>
      <LogoBlock
        className="logoImg"
        alt="로고 이미지"
        src={process.env.PUBLIC_URL + '/Images/Main/Logo.svg'}
      />
      <ButtonContainer>
        <SeniorBigButton>매장 식사하기</SeniorBigButton>
        <SeniorBigButton>포장하기</SeniorBigButton>
      </ButtonContainer>
    </Container>
  );
}
