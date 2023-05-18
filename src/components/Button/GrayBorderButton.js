import React from "react";
import * as style from "./styles";
import { ContentFontLargeGray } from "../style/font";

export default function GrayBorderButton (props) {
    return (
        <style.GrayBorderButton onClick={props.onClick}>
          <ContentFontLargeGray>{props.name}</ContentFontLargeGray>
        </style.GrayBorderButton>
    )
}