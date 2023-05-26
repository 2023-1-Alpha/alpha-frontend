import { useNavigate } from 'react-router-dom';

import SeniorFourButtonLayout from '../../components/Layout/SeniorFourButtonLayout';

export default function SeniorBurgerType() {
  const navigate = useNavigate();
  // TODO: connect page
  return (
    <SeniorFourButtonLayout
      firstBtnContent="고기 패티가 좋아요"
      firstBtnOnclick={() => {
        navigate('/seniorSelectBurger', { state: 'meat' });
      }}
      secondBtnContent="치킨 패티가 좋아요"
      secondBtnOnclick={() => {
        navigate('/seniorSelectBurger', { state: 'chicken' });
      }}
      thirdBtnContent="새우 패티가 좋아요"
      thirdBtnOnclick={() => {
        navigate('/seniorSelectBurger', { state: 'shrimp' });
      }}
    />
  );
}
