import React from "react";
import SideCategory from "../../components/SideCategory/SideCategory";
import { useState } from "react";
import * as style from "./styles";

export default function Sidebar(props) {
  const sideSelectors = {
    data: [
      {
        id: 0,
        name: "추천 메뉴",
        imgSrc: process.env.PUBLIC_URL + "/Images/Main/SideRecommend.svg",
      },
      {
        id: 1,
        name: "버거",
        imgSrc: process.env.PUBLIC_URL + "/Images/Main/SideBurger.svg",
      },
      {
        id: 2,
        name: "사이드",
        imgSrc: process.env.PUBLIC_URL + "/Images/Main/SideFries.svg",
      },
      {
        id: 3,
        name: "커피",
        imgSrc: process.env.PUBLIC_URL + "/Images/Main/SideCoffee.svg",
      },
      {
        id: 4,
        name: "디저트",
        imgSrc: process.env.PUBLIC_URL + "/Images/Main/SideDessert.svg",
      },
      {
        id: 5,
        name: "음료",
        imgSrc: process.env.PUBLIC_URL + "/Images/Main/SideDrink.svg",
      },
    ],
  };
  const [select, setSelect] = useState("");
  const handleClick = (name) => {
      setSelect(name);
      // 가입 로직 실행
  };

  return (
    <style.Sidebar>
      <img
        className="logoImg"
        alt="로고 이미지"
        src={process.env.PUBLIC_URL + "/Images/Main/Logo.svg"}
      />
      <>
        {sideSelectors.data.map((item) => {
          return (
            <SideCategory
              value={item.id}
              imgSrc={item.imgSrc}
              sideMenu={item.name}
              className={`${select === item.name ? "select" : ""}`} // 클릭하면 select클래스가 추가
              onClick={() => {
                props.getMenutype(item.id, item.name);
              }}
              active={props.menuType === item.id}
            />
          );
        })}
      </>
    </style.Sidebar>
  );
}