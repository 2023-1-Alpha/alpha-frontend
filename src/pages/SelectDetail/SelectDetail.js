import React, { useEffect, useState } from 'react';
import * as style from './styles';
import { useNavigate } from 'react-router-dom';
import DetailHeader from '../../components/Detail/DetailHeader';
import DetailSize from '../../components/Detail/DetailSize';
import DetailSide from '../../components/Detail/DetailSide';
import DetailDrink from '../../components/Detail/DetailDrink';
import DetailFinal from '../../components/Detail/DetailFinal';
import AddCart from './AddCart';
import Quantity from '../../components/Common/Quantity';
import YellowButton from '../../components/Button/YellowButton';
import GrayBorderButton from '../../components/Button/GrayBorderButton';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { ordersAtom } from '../../recoil/Order/atoms';

export default function SelectDetail() {
  // 백엔드에서 받아오기
  const orderData = {
    name: '치킨 크리스피 버거',
    price: 6200,
  };
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [nums, setNums] = useState(1);
  const [order, setOrder] = useState({
    name: orderData.name,
    side: {
      name: '',
      price: 0,
    },
    drink: {
      name: '',
      price: 0,
    },
    price: orderData.price,
    number: 1,
  });

  //recoilData
  const orderlist = useRecoilValue(ordersAtom);
  const setOrderlist = useSetRecoilState(ordersAtom);

  function getCount() {
    setCount(count);
  }

  function add_count() {
    if (count === 4) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }

  const addOrder = () => {
    setOrder((prevOrder) => {
      const updatedOrder = {
        ...prevOrder,
        price: prevOrder.price + prevOrder.side.price + prevOrder.drink.price,
        number: nums,
      };
      setOrderlist((orderlist) => [...orderlist, updatedOrder]);
      add_count();
      return updatedOrder;
    });
  };

  function reset() {
    setCount(0);
    // 페이지 이동
  }

  function goBack() {
    if (count === 0) {
      navigate('/selectMenu');
    } else {
      setCount(count - 1);
    }
  }
  return (
    <>
      {count < 4 ? (
        <style.SelectDetail>
          <DetailHeader
            count={count}
            getCount={getCount}
            add_count={add_count}
          />
          {count === 0 && (
            <DetailSize
              add_count={add_count}
              setOrder={setOrder}
              orderData={orderData}
            />
          )}
          {count === 1 && (
            <DetailSide add_count={add_count} setOrder={setOrder} />
          )}

          {count === 2 && (
            <DetailDrink add_count={add_count} setOrder={setOrder} />
          )}

          {count === 3 && (
            <DetailFinal
              nums={nums}
              order={order}
              setOrder={setOrder}
              add_count={add_count}
            />
          )}
          {count === 3 && (
            <style.countAndCart>
              <Quantity nums={nums} setNums={setNums} />
              <YellowButton name={'장바구니 추가'} onClick={() => addOrder()} />
            </style.countAndCart>
          )}
          <GrayBorderButton name={'취소'} onClick={() => goBack()} />
        </style.SelectDetail>
      ) : (
        <AddCart orderlist={orderlist} />
      )}
    </>
  );
}
