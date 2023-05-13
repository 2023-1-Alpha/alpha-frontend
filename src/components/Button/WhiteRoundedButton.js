import React from "react";
import * as style from "./styles";
import { ContentFontLarge } from "../style/font";

function WhiteRoundedButton(props) {
  return (
    <style.WhiteRoundedButton onClick={props.onClick}>
      <img src={props.imgSrc} alt="selectSpace" />
        <ContentFontLarge>
        {props.text}
        </ContentFontLarge>
    </style.WhiteRoundedButton>
  );
}

export default WhiteRoundedButton;