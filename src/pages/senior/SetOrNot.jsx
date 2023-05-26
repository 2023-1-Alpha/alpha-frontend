import { useNavigate } from 'react-router-dom';

import SeniorThreeButtonLayout from '../../components/Layout/SeniorThreeButtonLayout';

export default function SeniorBurgerOrSide() {
  const navigate = useNavigate();

  return (
    <SeniorThreeButtonLayout
      firstBtnContent="세트로 먹기"
      firstBtnOnclick={() => {
        navigate('/seniorSelectBuger');
      }}
      secondBtnContent="단품으로 먹기"
      secondBtnOnclick={() => {
        navigate('/seniorSelectSideMenu');
      }}
    />
  );
}
