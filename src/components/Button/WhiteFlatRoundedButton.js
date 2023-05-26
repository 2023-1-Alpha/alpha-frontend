import React from "react";
import * as style from "./styles";
import { ContentFontSmall } from "../style/font";

function WhiteFlatRoundedButton(props) {
  return (
    <style.WhiteFlatRoundedButton onClick={props.onClick}>
      <ContentFontSmall>
        {props.name}
      </ContentFontSmall>
    </style.WhiteFlatRoundedButton>
  );
}

export default WhiteFlatRoundedButton;