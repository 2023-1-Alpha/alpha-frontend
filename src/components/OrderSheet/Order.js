import React, { useState } from 'react';
import styled from 'styled-components';
import { ContentFontLarge } from '../style/font';
import Quantity from '../Common/Quantity';

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
  const [nums, setNums] = useState(1);

  const deleteOrder = () => {};

  return (
    <Container>
      <OrderImg src={'/Images/Main/BurgerSet1.svg'} />
      <OrderContent>
        <OrderInfo>
          <ContentFontLarge>{props.name}</ContentFontLarge>
          <Price>₩{props.price}</Price>
          <TrashCan src={'/Images/Main/trashCan.svg'} />
        </OrderInfo>
        <Quantity mini="true" nums={nums} setNums={setNums} />
      </OrderContent>
    </Container>
  );
}
