import React from "react";
import * as style from "./styles";
import WhiteRoundedSmallButton from "../../components/Button/WhiteRoundedSmallButton";
export default function DetailSide(props) {
  function onClick() {
    props.add_count();
  }

  return (
    <style.DetailSide>
      <WhiteRoundedSmallButton
        imgSrc={props.menuImg}
        text={props.menuName}
        price={props.menuPrice}
        onClick={onClick}
      />
      <WhiteRoundedSmallButton
        imgSrc={props.menuSetImg}
        text={props.menuSetName}
        price={props.menuSetPrice}
        onClick={onClick}
      />
      <WhiteRoundedSmallButton
        imgSrc={props.menuSetImg}
        text={props.menuSetName}
        price={props.menuSetPrice}
        onClick={onClick}
      />
      <WhiteRoundedSmallButton
        imgSrc={props.menuSetImg}
        text={props.menuSetName}
        price={props.menuSetPrice}
        onClick={onClick}
      />
    </style.DetailSide>
  );
}
