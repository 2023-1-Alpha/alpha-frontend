import React from "react";
import * as style from "./styles";
import { ContentFontLarge } from "../style/font";

function WhiteRoundedLargeButton(props) {
  return (
    <style.WhiteRoundedLargeButton onClick={props.onClick}>
      <img src={props.imgSrc} alt="selectSpace" />
      <ContentFontLarge>{props.text}</ContentFontLarge>
      <ContentFontLarge>￦{props.price}</ContentFontLarge>
    </style.WhiteRoundedLargeButton>
  );
}

export default WhiteRoundedLargeButton;