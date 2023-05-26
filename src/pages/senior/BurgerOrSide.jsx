import { useNavigate } from 'react-router-dom';

import SeniorThreeButtonLayout from '../../components/Layout/SeniorThreeButtonLayout';

export default function SeniorBurgerOrSide() {
  const navigate = useNavigate();

  return (
    <SeniorThreeButtonLayout
      firstBtnContent="햄버거 먹기"
      firstBtnOnclick={() => {
        navigate('/seniorSelectBuger');
      }}
      secondBtnContent="다른 메뉴 먹기"
      secondBtnOnclick={() => {
        navigate('/seniorSelectSideMenu');
      }}
    />
  );
}
