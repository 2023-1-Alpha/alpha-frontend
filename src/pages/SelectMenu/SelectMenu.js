import React from "react";
import SideCategory from "../../components/SideCategory/SideCategory";
import GrayRoundedButton from "../../components/Button/GrayRoundedButton";
import WhiteFlatRoundedButton from "../../components/Button/WhiteFlatRoundedButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import * as style from "./styles";
import { SubTitleFont } from "../../components/style/font";

export default function SelectMenu() {
  const [menuType, setMenuType] = useState(1);
  const [menuTypeName, setMenuTypeName] = useState("버거");
  const location = useLocation();
  let [btnActive, setBtnActive] = useState("");
  console.log(location.state);
  console.log(menuType);
  console.log(menuTypeName);

  const navigate = useNavigate();

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

  const onClickMenu = () => {}; // Modal 창
  const [select, setSelect] = useState('');

  const handleClick = (name) => {
      setSelect(name);
      // 가입 로직 실행
  };
  return (
    <style.Wrap>
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
                className={`${select === item.name ? 'select' : ''}`} // 클릭하면 select클래스가 추가
                onClick={() => {
                  setMenuType(item.id);
                  setMenuTypeName(item.name);
                }}
                active={menuType === item.id}
              />
            );
          })}
        </>
      </style.Sidebar>
      <style.Menu>
        <SubTitleFont>
          {menuTypeName}
        </SubTitleFont>
        {/* 데이터 구조 나오면 여기부터 고쳐야 될듯 */}
        <style.MenuHeader>
          {menuType === 1 &&
            burgersHeader.data.map((item) => {
              return <WhiteFlatRoundedButton name={item.title} />;
            })}
          {menuType === 2 &&
            dessertHeader.data.map((item) => {
              return <WhiteFlatRoundedButton name={item.title} />;
            })}
        </style.MenuHeader>

        <style.MenuList>
          {menuType === 0 && (
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
          {menuType === 1 && (
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

        <style.MenuFooter>
          <style.orderInfo>
            <style.price>￦16,900</style.price>
            <style.orderList>
              <p>주문 내역</p>
            </style.orderList>
          </style.orderInfo>
          <style.btnHome
            onClick={() => {
              navigate("/");
            }}
          >
            <p>처음으로</p>
          </style.btnHome>
        </style.MenuFooter>
      </style.Menu>
    </style.Wrap>
  );
}
