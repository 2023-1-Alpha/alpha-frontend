import * as style from './styles';
import { SubTitleFont } from '../../components/style/font';
export default function AddCart(props) {
  console.log(props.orderlist);
  return (
    <style.AddCart>
      <img src={'Images/Main/AddCart.svg'} />
      <SubTitleFont>주문 내역에 메뉴가 추가되었습니다</SubTitleFont>
    </style.AddCart>
  );
}
