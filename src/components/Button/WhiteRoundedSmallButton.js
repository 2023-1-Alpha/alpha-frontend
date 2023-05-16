import React from "react";
import * as style from "./styles";
import { ContentFontSmall } from "../style/font";
import { ContentFontMiddle } from "../style/font";

function WhiteRoundedSmallButton(props) {
  return (
    <style.WhiteRoundedSmallButton onClick={props.onClick}>
      <img src={props.imgSrc} alt="selectSpace" />
      <ContentFontMiddle>{props.text}</ContentFontMiddle>
      <ContentFontMiddle>￦{props.price}</ContentFontMiddle>
    </style.WhiteRoundedSmallButton>
  );
}

export default WhiteRoundedSmallButton;