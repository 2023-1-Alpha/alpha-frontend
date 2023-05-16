import React from "react";
import { useNavigate } from "react-router-dom";
import * as style from "./styles";
import { ContentFontLarge } from "../../components/style/font";

export default function MenuFooter(props) {
  const navigate = useNavigate();
  const onClickMenu = () => {}; // Modal 창

  return (
    <style.MenuFooter>
      <style.orderInfo>
        <style.price>
          <ContentFontLarge>￦16,900</ContentFontLarge>
        </style.price>
        <style.orderList>
          <ContentFontLarge>주문 내역</ContentFontLarge>
        </style.orderList>
      </style.orderInfo>
      <style.btnHome
        onClick={() => {
          navigate("/");
        }}
      >
        <ContentFontLarge>처음으로</ContentFontLarge>
      </style.btnHome>
    </style.MenuFooter>
  );
}
