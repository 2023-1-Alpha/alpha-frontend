import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { SeniorGoToHomeButton } from '../../components/Button/SeniorButton';

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

const InfoSpan = styled.span`
  font-family: 'IBM Plex Sans KR';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 45px;
  text-align: center;
  color: #121212;
  margin: 0px 12px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
  margin-top: 23px;
  margin-bottom: 43px;
  padding: 0px 12px;
`;

const Button = styled.button`
  width: 525px;
  height: 225px;
  padding: 46px 79px;
  background: #df843e;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0px 14px 22px -10px rgba(0, 0, 0, 0.05);
  border-radius: 30px;
  font-family: 'IBM Plex Sans KR';
  font-style: normal;
  font-weight: 600;
  font-size: 55px;
  line-height: 82px;
  text-align: center;
  color: #ffffff;
`;

// TODO: connect page
export default function SeniotSetSizeUp() {
  const navigate = useNavigate();

  return (
    <Container>
      <LogoBlock
        className="logoImg"
        alt="로고 이미지"
        src={process.env.PUBLIC_URL + '/Images/Main/Logo.svg'}
      />
      <InfoSpan>
        사이드랑 음료를 큰 사이즈로 드시겠어요?
        <br />
        500원 추가 요금이 발생해요
      </InfoSpan>
      <ButtonContainer>
        <Button
          onClick={() => {
            navigate('/seniorSelectSide', { state: 'large' });
          }}
        >
          네
        </Button>
        <Button
          onClick={() => {
            navigate('/seniorSelectSide', { state: 'small' });
          }}
        >
          아니요
        </Button>
      </ButtonContainer>
      <SeniorGoToHomeButton
        onClick={() => {
          navigate('/seniorHome');
        }}
      />
    </Container>
  );
}
