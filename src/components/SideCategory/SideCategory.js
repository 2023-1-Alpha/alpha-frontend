import React from "react";
import * as style from "./styles";

function SideCategory(props) {
  return (
    <style.SideCategory onClick={props.onClick} active={props.active}>
      <img src={props.imgSrc} alt="sideImg"/>
      <p>
        {props.sideMenu}
      </p>
    </style.SideCategory>
  );
}

export default SideCategory;