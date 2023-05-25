import React from "react";
import * as style from "./styles";
import styled from "styled-components";
import { ContentFontLarge } from "../style/font";

const Text = styled(ContentFontLarge)`
  flex: 1;
  padding: 0 30px;
`;

function WhiteRoundedLargeButton(props) {
  return (
    <style.WhiteRoundedLargeButton onClick={props.onClick}>
      <img src={props.imgSrc} />
      <Text>{props.text}</Text>
      <ContentFontLarge>￦{props.price}</ContentFontLarge>
    </style.WhiteRoundedLargeButton>
  );
}

export default WhiteRoundedLargeButton;