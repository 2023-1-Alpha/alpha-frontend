import * as style from './styles';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { SubTitleFont } from '../../components/style/font';
export default function AddCart(props) {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      // 실행할 함수
      navigate('/selectMenu');
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <style.AddCart>
      <img src={'Images/Main/AddCart.svg'} />
      <SubTitleFont>주문 내역에 메뉴가 추가되었습니다</SubTitleFont>
    </style.AddCart>
  );
}
