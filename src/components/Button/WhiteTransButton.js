import React from "react";
import * as style from "./styles";
import { ContentFontLargeWhite } from "../style/font";
import { useNavigate } from "react-router-dom";


export default function WhiteTransButton(props) {
    const navigate = useNavigate();
    return (
        <style.WhiteTransButton onClick={() => { navigate(props.url); }}>
            <ContentFontLargeWhite>{props.name}</ContentFontLargeWhite>
      </style.WhiteTransButton>
    )
}