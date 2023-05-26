import { useNavigate } from 'react-router-dom';

import SeniorFourButtonLayout from '../../components/Layout/SeniorFourButtonLayout';

export default function SeniorSideMenuSelect() {
  const navigate = useNavigate();

  // TODO: connect page
  return (
    <SeniorFourButtonLayout
      firstBtnContent="사이드 메뉴 먹기"
      firstBtnOnclick={() => {
        navigate('/seniorSelectSide', { state: 'onlySide' });
      }}
      secondBtnContent="음료수 먹기"
      secondBtnOnclick={() => {
        navigate('/seniorSelectDrink', { state: 'onlyDrink' });
      }}
      thirdBtnContent="디저트 먹기"
      thirdBtnOnclick={() => {
        navigate('/seniorSelectDessert');
      }}
    />
  );
}
