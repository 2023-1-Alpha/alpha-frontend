import React from "react";
import WhiteFlatRoundedButton from "../../components/Button/WhiteFlatRoundedButton";
import * as style from "./styles";

export default function MenuHeader(props) {
  const burgersHeader = {
    data: [
      {
        id: 1,
        title: "전체",
      },
      {
        id: 2,
        title: "치킨",
      },
      {
        id: 3,
        title: "씨푸드",
      },
      {
        id: 4,
        title: "불고기",
      },
    ],
  };

  const dessertHeader = {
    data: [
      {
        id: 1,
        title: "전체",
      },
      {
        id: 2,
        title: "그 외 디저트",
      },
      {
        id: 3,
        title: "아이스크림",
      },
      {
        id: 4,
        title: "파이",
      },
    ],
  };

  return (
    <style.MenuHeader>
      {props.menuType === 1 &&
        burgersHeader.data.map((item) => {
          return <WhiteFlatRoundedButton name={item.title} />;
        })}
      {props.menuType === 2 &&
        dessertHeader.data.map((item) => {
          return <WhiteFlatRoundedButton name={item.title} />;
        })}
    </style.MenuHeader>
  );
}
