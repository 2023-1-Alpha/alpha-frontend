import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Order from './Order';
import { TitleFont } from '../../components/style/font';
import { useRecoilState } from 'recoil';
import { ordersAtom } from '../../recoil/Order/atoms';

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
  //rocoil data
  const [orderlist, setOrderlist] = useRecoilState(ordersAtom);

  const deleteHandler = (order) => {
    const newList = orderlist.filter((currentOrder) => currentOrder !== order);
    console.log(newList);
    setOrderlist(newList);
  };

  useEffect(()=> {
    console.log(orderlist);
  },[orderlist])

  return (
    <Container>
      <TitleFont>주문</TitleFont>
      <OrdersContainer>
        {orderlist.map((data) => (
          <Order
            order={data}
            name={data.name}
            price={data.price}
            nums={data.number}
            deleteHandler={deleteHandler}
          />
        ))}
      </OrdersContainer>
    </Container>
  );
}
