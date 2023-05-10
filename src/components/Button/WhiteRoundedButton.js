import React from "react";
import * as style from "./styles";

function WhiteRoundedButton(props) {
  return (
    <style.WhiteRoundedButton onClick={props.onClick}>
      <img src={props.imgSrc} alt="selectSpace" />
      <p style={{ fontWeight: "1000", fontSize: "20px", color: "#000000" }}>
        {props.text}
      </p>
    </style.WhiteRoundedButton>
  );
}

export default WhiteRoundedButton;