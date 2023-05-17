import React from "react";
import styled from "styled-components";

const LogoImg = styled.img`
  width: 105px;
  height: 75px;
  padding-left: 23px;
`;

export default function Logo () {
    return (
        <LogoImg
        alt="로고 이미지"
        src={process.env.PUBLIC_URL + "/Images/Main/Logo.svg"}
      />
    )
}