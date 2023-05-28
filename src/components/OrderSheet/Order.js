import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ContentFontLarge } from '../style/font';
import Quantity from '../Common/Quantity';
import { useRecoilState } from 'recoil';
import { ordersAtom } from '../../recoil/Order/atoms';

const Container = styled.div`
  display: flex;
  gap: 32px;
  padding: 20px;
  border: 1px solid rgba(18, 18, 18, 0.1);
  border-radius: 20px;
  justify-content: space-around;
`;

const OrderImg = styled.img`
  width: 70px;
  height: 65px;
`;

const OrderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

const OrderInfo = styled.div`
  display: flex;
`;

const Price = styled(ContentFontLarge)`
  margin-left: 58px;
`;

const TrashCan = styled.img`
  width: 18px;
  height: 22px;
  margin-left: 21px;
`;

export default function Order(props) {
  const [nums, setNums] = useState(props.nums);
  const [orderlist, setOrderlist] = useRecoilState(ordersAtom);

  //nums, props.id가 바뀔 때마다 호출
  useEffect(() => {
    setOrderlist((prevOrderlist) => {
      const updatedOrderlist = prevOrderlist.map((order) => {
        if (order.id === props.id) {
          return {
            ...order,
            number: nums,
          };
        }
        return order;
      });
      return updatedOrderlist;
    });
  }, [nums, props.id]);

  return (
    <Container>
      <OrderImg src={'/Images/Main/BurgerSet1.svg'} />
      <OrderContent>
        <OrderInfo>
          <ContentFontLarge>{props.name}</ContentFontLarge>
          <Price>₩{props.price * nums}</Price>
          <TrashCan
            src={'/Images/Main/trashCan.svg'}
            onClick={() => props.deleteHandler(props.id)}
          />
        </OrderInfo>
        <Quantity mini="true" nums={nums} setNums={setNums} />
      </OrderContent>
    </Container>
  );
}
