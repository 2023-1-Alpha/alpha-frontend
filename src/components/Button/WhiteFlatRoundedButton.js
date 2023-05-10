import React from "react";
import * as style from "./styles";

function WhiteFlatRoundedButton(props) {
  return (
    <style.WhiteFlatRoundedButton onClick={props.onClick}>
      <p>{props.name}</p>
    </style.WhiteFlatRoundedButton>
  );
}

export default WhiteFlatRoundedButton;