import React from "react";
import * as style from "./styles";
import styled from "styled-components";
import { ContentFontSmall } from "../style/font";
import { ContentFontMiddle } from "../style/font";

const Text = styled(ContentFontMiddle)`
  flex: 1;
  padding: 0 18px;
`;

function WhiteRoundedSmallButton(props) {
  return (
    <style.WhiteRoundedSmallButton onClick={props.onClick}>
      <img src={props.imgSrc} alt="selectSpace" />
      <Text>{props.text}</Text>
      <ContentFontMiddle>￦{props.price}</ContentFontMiddle>
    </style.WhiteRoundedSmallButton>
  );
}

export default WhiteRoundedSmallButton;