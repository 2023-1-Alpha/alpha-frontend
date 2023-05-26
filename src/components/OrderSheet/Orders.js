import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Order from './Order';
import { TitleFont } from '../../components/style/font';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 49px;
  background: #fff;
  padding: 57px 48px 67px 48px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 80px 80px;
  height: 70%;
`;

const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 450px;
  overflow-y: scroll;
`;

export default function Orders() {
  const ds = {
    order: [
      {
        id: 1,
        name: '치킨 크리스피 버거',
        price: '6200',
      },
      {
        id: 2,
        name: '치킨 크리스피 버거',
        price: '6200',
      },
      {
        id: 3,
        name: '치킨 크리스피 버거',
        price: '6200',
      },
    ],
  };

  const [orders, setOrders] = useState(ds.order);

  return (
    <Container>
      <TitleFont>주문</TitleFont>
      <OrdersContainer>
        {orders.map((data) => (
          <Order name={data.name} price={data.price} />
        ))}
      </OrdersContainer>
    </Container>
  );
}
