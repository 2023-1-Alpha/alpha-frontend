import React from 'react';
import WhiteRoundedButton from '../../components/Button/WhiteRoundedButton';
import * as style from './styles';
import { SubTitleFont } from '../../components/style/font';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WaitingCameraModal from '../../components/Menu/Modal/WaitingCameraModal';

export default function Home() {
  const [userType, setUserType] = useState('');

  const navigate = useNavigate();

  return (
    <style.Wrap>
      <style.LogoBlock
        className="logoImg"
        alt="로고 이미지"
        src={process.env.PUBLIC_URL + '/Images/Main/Logo.svg'}
      />
      <SubTitleFont>식사 장소를 선택해주세요</SubTitleFont>
      <style.SpaceBlock>
        <WhiteRoundedButton
          imgSrc={process.env.PUBLIC_URL + '/Images/Main/ForHere.svg'}
          text={'매장 식사'}
          small={true}
          onClick={() => {
            setUserType('forHere');
            navigate('/selectMenu', {
              state: {
                usertype: 'forHere',
              },
            });
          }}
        />
        <WhiteRoundedButton
          imgSrc={process.env.PUBLIC_URL + '/Images/Main/ToGo.svg'}
          text={'포장 주문'}
          small={true}
          onClick={() => {
            setUserType('toGo');
            navigate('/selectMenu', {
              state: {
                usertype: 'toGo',
              },
            });
          }}
        />
      </style.SpaceBlock>
    </style.Wrap>
  );
}
