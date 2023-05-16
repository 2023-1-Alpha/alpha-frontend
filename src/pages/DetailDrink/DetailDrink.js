import React from "react";
import * as style from "./styles";
import WhiteRoundedSmallButton from "../../components/Button/WhiteRoundedSmallButton";

export default function DetailDrink(props) {
  function onClick() {
    props.add_count();
  }
  return (
    <style.DetailDrink>
      <WhiteRoundedSmallButton
        imgSrc={props.menuSetImg}
        text={props.menuSetName}
        price={props.menuSetPrice}
        onClick={onClick}
      />
      <WhiteRoundedSmallButton
        imgSrc={props.menuImg}
        text={props.menuName}
        price={props.menuPrice}
        onClick={onClick}
      />
    </style.DetailDrink>
  );
}
