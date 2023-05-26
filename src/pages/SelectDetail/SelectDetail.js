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
export default function SelectDetail() {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [nums, setNums] = useState(1);

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
  const menuName = '치킨 크리스피 버거';
  const menuPrice = '1000';
  const menuImg = process.env.PUBLIC_URL + '/Images/Main/Burger1.svg';

  const menuSetName = '치킨 크리스피 버거 세트';
  const menuSetPrice = '3000';
  const menuSetImg = process.env.PUBLIC_URL + '/Images/Main/BurgerSet1.svg';

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
              menuName={menuName}
              menuPrice={menuPrice}
              menuImg={menuImg}
              menuSetName={menuSetName}
              menuSetPrice={menuSetPrice}
              menuSetImg={menuSetImg}
              add_count={add_count}
            />
          )}
          {count === 1 && (
            <DetailSide
              menuName={menuName}
              menuPrice={menuPrice}
              menuImg={menuImg}
              menuSetName={menuSetName}
              menuSetPrice={menuSetPrice}
              menuSetImg={menuSetImg}
              add_count={add_count}
            />
          )}

          {count === 2 && (
            <DetailDrink
              menuName={menuName}
              menuPrice={menuPrice}
              menuImg={menuImg}
              menuSetName={menuSetName}
              menuSetPrice={menuSetPrice}
              menuSetImg={menuSetImg}
              add_count={add_count}
            />
          )}

          {count === 3 && (
            <DetailFinal
              menuName={menuName}
              menuPrice={menuPrice}
              menuImg={menuImg}
              menuSetName={menuSetName}
              menuSetPrice={menuSetPrice}
              menuSetImg={menuSetImg}
              add_count={add_count}
            />
          )}
          {count === 3 && (
            <style.countAndCart>
              <Quantity nums={nums} setNums={setNums} />
              <YellowButton
                name={'장바구니 추가'}
                onClick={() => add_count()}
              />
            </style.countAndCart>
          )}
          <GrayBorderButton name={'취소'} onClick={() => goBack()} />
        </style.SelectDetail>
      ) : (
        <AddCart />
      )}
    </>
  );
}
