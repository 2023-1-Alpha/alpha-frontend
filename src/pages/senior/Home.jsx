import React from 'react';
import styled from 'styled-components';

import WhiteRoundedButton from '../../components/Button/WhiteRoundedButton';
import { SubTitleFont } from '../../components/style/font';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Wrap = styled.div`
  padding-top: 38px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoBlock = styled.img`
  margin-bottom: 111px;
  width: 200px;
  height: 200px;
`;

const SpaceBlock = styled.div`
  display: flex;
  justify-content: center;
  gap: 65px;
  margin: 50px;
`;

const Link = styled.link`
  text-decoration-line: none;
`;

export default function SeniorMain() {
  const [userType, setUserType] = useState('');

  const navigate = useNavigate();

  return (
    <Wrap>
      <LogoBlock
        className="logoImg"
        alt="로고 이미지"
        src={process.env.PUBLIC_URL + '/Images/Main/Logo.svg'}
      />
    </Wrap>
  );
}
