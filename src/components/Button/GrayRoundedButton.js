import React from "react";
import * as style from "./styles";
import { ContentFontSmall } from "../style/font";


function GrayRoundedButton(props) {
  return (
    <style.GrayRoundedButton onClick={props.onClick}>
      <img src={props.imgSrc} alt="menuImg"/>
      <ContentFontSmall>
        {((props.menu).length > 10) ? props.menu.replace(props.menu,(props.menu).substr(0,9)+".."):props.menu}
      </ContentFontSmall>
      <ContentFontSmall>
        ￦{props.price}
      </ContentFontSmall>
    </style.GrayRoundedButton>
  );
}

export default GrayRoundedButton;