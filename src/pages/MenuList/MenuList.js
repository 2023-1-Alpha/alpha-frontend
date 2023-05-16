import React from "react";
import GrayRoundedButton from "../../components/Button/GrayRoundedButton";
import * as style from "./styles";

export default function MenuList(props) {
    const ds = {
        data: [
          {
            id: 1,
            name: "d1",
            imgSrc: process.env.PUBLIC_URL + "/Images/Main/D1.jpg",
            price: "12",
          },
          {
            id: 2,
            name: "d2",
            imgSrc: process.env.PUBLIC_URL + "/Images/Main/D2.jpg",
            price: "12",
          },
          {
            id: 3,
            name: "d3",
            imgSrc: process.env.PUBLIC_URL + "/Images/Main/D3.jpg",
            price: "12",
          },
          {
            id: 4,
            name: "d4",
            imgSrc: process.env.PUBLIC_URL + "/Images/Main/D4.jpg",
            price: "12",
          },
          {
            id: 5,
            name: "d5",
            imgSrc: process.env.PUBLIC_URL + "/Images/Main/D5.jpg",
            price: "12",
          },
        ],
      };
    
      const burgers = {
        data: [
          {
            id: 1,
            name: "치킨 크리스피 버거",
            imgSrc: process.env.PUBLIC_URL + "/Images/Main/Burger1.svg",
            price: "1000",
          },
          {
            id: 2,
            name: "치킨 크리스피 버거",
            imgSrc: process.env.PUBLIC_URL + "/Images/Main/Burger1.svg",
            price: "1000",
          },
          {
            id: 3,
            name: "치킨 크리스피 버거",
            imgSrc: process.env.PUBLIC_URL + "/Images/Main/Burger1.svg",
            price: "1000",
          },
          {
            id: 4,
            name: "치킨 크리스피 버거",
            imgSrc: process.env.PUBLIC_URL + "/Images/Main/Burger1.svg",
            price: "1000",
          },
          {
            id: 5,
            name: "치킨 크리스피 버거",
            imgSrc: process.env.PUBLIC_URL + "/Images/Main/Burger1.svg",
            price: "1000",
          },
          {
            id: 6,
            name: "치킨 크리스피 버거",
            imgSrc: process.env.PUBLIC_URL + "/Images/Main/Burger1.svg",
            price: "1000",
          },
          {
            id: 7,
            name: "치킨 크리스피 버거",
            imgSrc: process.env.PUBLIC_URL + "/Images/Main/Burger1.svg",
            price: "1000",
          },
        ],
      };
    
    return(
        <style.MenuList>
          {props.menuType === 0 && (
            <div>
              {ds.data.map((item) => {
                return (
                  <GrayRoundedButton
                    imgSrc={item.imgSrc}
                    menu={item.name}
                    price={item.price}
                  />
                );
              })}
            </div>
          )}
          {props.menuType === 1 && (
            <div>
              {burgers.data.map((item) => {
                return (
                  <GrayRoundedButton
                    imgSrc={item.imgSrc}
                    menu={item.name}
                    price={item.price}
                  />
                );
              })}
            </div>
          )}
        </style.MenuList>
    )
}