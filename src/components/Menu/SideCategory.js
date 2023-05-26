import React from "react";
import * as style from "./styles";
import { ContentFontMiddle } from "../style/font";

function SideCategory(props) {
  return (
    <style.SideCategory onClick={props.onClick} active={props.active}>
      <style.SideImg src={props.imgSrc} alt="sideImg"/>
      <ContentFontMiddle>
        {props.sideMenu}
      </ContentFontMiddle>
    </style.SideCategory>
  );
}

export default SideCategory;