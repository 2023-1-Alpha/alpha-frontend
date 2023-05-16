import React from "react";
import * as style from "./styles";
import WhiteRoundedLargeButton from "../../components/Button/WhiteRoundedLargeButton";
import { SubTitleFont } from "../../components/style/font";
export default function DetailFinal(props) {
  function onClick() {
    props.add_count();
  }
  return(
    <style.DetailFinal>
      <SubTitleFont>
        {props.menuSetName}
      </SubTitleFont>
      <hr/>
      <SubTitleFont
        style={{color:"#DF843E"}}
        >
        ￦{props.menuSetPrice}
      </SubTitleFont>
      <img
        src={props.menuSetImg}
        onClick={onClick}
      />
    </style.DetailFinal>
  )
}