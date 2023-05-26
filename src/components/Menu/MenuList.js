import React from 'react';
import GrayRoundedButton from '../Button/GrayRoundedButton';
import * as style from './styles';

export default function MenuList(props) {
  const ds = {
    data: [
      {
        id: 1,
        name: 'd1',
        imgSrc: process.env.PUBLIC_URL + '/Images/Main/D1.jpg',
        price: '12',
      },
      {
        id: 2,
        name: 'd2',
        imgSrc: process.env.PUBLIC_URL + '/Images/Main/D2.jpg',
        price: '12',
      },
      {
        id: 3,
        name: 'd3',
        imgSrc: process.env.PUBLIC_URL + '/Images/Main/D3.jpg',
        price: '12',
      },
      {
        id: 4,
        name: 'd4',
        imgSrc: process.env.PUBLIC_URL + '/Images/Main/D4.jpg',
        price: '12',
      },
      {
        id: 5,
        name: 'd5',
        imgSrc: process.env.PUBLIC_URL + '/Images/Main/D5.jpg',
        price: '12',
      },
    ],
  };

  const burgers = {
    data: [
      {
        id: 1,
        name: '치킨 크리스피 버거',
        imgSrc: process.env.PUBLIC_URL + '/Images/Main/Burger1.svg',
        price: '1000',
      },
      {
        id: 2,
        name: '치킨 크리스피 버거',
        imgSrc: process.env.PUBLIC_URL + '/Images/Main/Burger1.svg',
        price: '1000',
      },
      {
        id: 3,
        name: '치킨 크리스피 버거',
        imgSrc: process.env.PUBLIC_URL + '/Images/Main/Burger1.svg',
        price: '1000',
      },
      {
        id: 4,
        name: '치킨 크리스피 버거',
        imgSrc: process.env.PUBLIC_URL + '/Images/Main/Burger1.svg',
        price: '1000',
      },
      {
        id: 5,
        name: '치킨 크리스피 버거',
        imgSrc: process.env.PUBLIC_URL + '/Images/Main/Burger1.svg',
        price: '1000',
      },
      {
        id: 6,
        name: '치킨 크리스피 버거',
        imgSrc: process.env.PUBLIC_URL + '/Images/Main/Burger1.svg',
        price: '1000',
      },
      {
        id: 7,
        name: '치킨 크리스피 버거',
        imgSrc: process.env.PUBLIC_URL + '/Images/Main/Burger1.svg',
        price: '1000',
      },
      {
        id: 7,
        name: '치킨 크리스피 버거',
        imgSrc: process.env.PUBLIC_URL + '/Images/Main/Burger1.svg',
        price: '1000',
      },
      {
        id: 7,
        name: '치킨 크리스피 버거',
        imgSrc: process.env.PUBLIC_URL + '/Images/Main/Burger1.svg',
        price: '1000',
      },
      {
        id: 7,
        name: '치킨 크리스피 버거',
        imgSrc: process.env.PUBLIC_URL + '/Images/Main/Burger1.svg',
        price: '1000',
      },
      {
        id: 7,
        name: '치킨 크리스피 버거',
        imgSrc: process.env.PUBLIC_URL + '/Images/Main/Burger1.svg',
        price: '1000',
      },
      {
        id: 7,
        name: '치킨 크리스피 버거',
        imgSrc: process.env.PUBLIC_URL + '/Images/Main/Burger1.svg',
        price: '1000',
      },
      {
        id: 7,
        name: '치킨 크리스피 버거',
        imgSrc: process.env.PUBLIC_URL + '/Images/Main/Burger1.svg',
        price: '1000',
      },
      {
        id: 7,
        name: '치킨 크리스피 버거',
        imgSrc: process.env.PUBLIC_URL + '/Images/Main/Burger1.svg',
        price: '1000',
      },
      {
        id: 7,
        name: '치킨 크리스피 버거',
        imgSrc: process.env.PUBLIC_URL + '/Images/Main/Burger1.svg',
        price: '1000',
      },
      {
        id: 7,
        name: '치킨 크리스피 버거',
        imgSrc: process.env.PUBLIC_URL + '/Images/Main/Burger1.svg',
        price: '1000',
      },
      {
        id: 7,
        name: '치킨 크리스피 버거',
        imgSrc: process.env.PUBLIC_URL + '/Images/Main/Burger1.svg',
        price: '1000',
      },
    ],
  };

  return (
    <style.MenuList>
      <style.MenuGrid>
        {props.menuType === 0 &&
          ds.data.map((item) => (
            <GrayRoundedButton
              imgSrc={item.imgSrc}
              menu={item.name}
              price={item.price}
              onClick={props.openModal}
            />
          ))}
        {props.menuType === 1 &&
          burgers.data.map((item) => (
            <GrayRoundedButton
              imgSrc={item.imgSrc}
              menu={item.name}
              price={item.price}
              onClick={props.openModal}
            />
          ))}
      </style.MenuGrid>
    </style.MenuList>
  );
}
