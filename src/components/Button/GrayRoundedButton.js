import React from "react";
import * as style from "./styles";


function GrayRoundedButton(props) {
  return (
    <style.GrayRoundedButton onClick={props.onClick}>
      <img src={props.imgSrc} alt="menuImg"/>
      <p>
        {((props.menu).length > 10) ? props.menu.replace(props.menu,(props.menu).substr(0,9)+".."):props.menu}
      </p>
      <p>
        ￦{props.price}
      </p>
    </style.GrayRoundedButton>
  );
}

export default GrayRoundedButton;
