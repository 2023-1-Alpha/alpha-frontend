import styled from 'styled-components';
import { SubTitleFontWhite } from '../components/style/font';
import React, { useEffect, useState } from 'react';
import WaitingCameraModal from '../components/Menu/Modal/WaitingCameraModal';
import { useNavigate } from 'react-router-dom';
const Wrap = styled.div`
  padding-top: 60px;
  width: 100%;
  height: calc(100vh - 74px);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: radial-gradient(
    50% 50% at 50% 50%,
    #ffdeb7 0%,
    #ffb861 56.25%,
    #ff8c00 100%
  );
`;
const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
  padding-right: 24px;
`;
const MainImg = styled.img`
  flex: 1;
  width: 100%;
`;
const TextContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 54px;
`;
const BottomImg = styled.img`
  margin-right: 12px;
`;

export default function RealHome() {
  const navigate = useNavigate();
  const [isopen, setIsopen] = useState(false);

  const handleComponentClick = () => {
    setIsopen(true);
  };

  return (
    <Wrap onClick={handleComponentClick}>
      {isopen && <WaitingCameraModal modalIsOpen={isopen} />}

      <HeaderContainer>
        <img src={'Images/Main/LogoWhite.svg'} />
      </HeaderContainer>
      <MainImg src={'Images/Main/Fuck3.svg'} />
      <TextContainer>
        <BottomImg src={'Images/Main/UpFinger.svg'} />
        <SubTitleFontWhite>주문하시려면 화면을 터치하세요</SubTitleFontWhite>
      </TextContainer>
    </Wrap>
  );
}
