import React from "react";
import styled from "styled-components";
import { ContentFontLargeColor } from "../style/font";

export default function Quantity (props) {

  console.log(props.mini);

    const NumsContainer = styled.div`
      display: flex;
      align-items: center;
      gap: 8px;
      height: 52px;
      >img {
        width: ${props => props.mini ? '22px' : '52px'};
        height: ${props => props.mini ? '22px' : '52px'};
      }
      `
    const NumsCount = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      width: ${props => props.mini ? '98px' : '244px'};
      height: 100%;
      border: 1px solid #DF843E;
      border-radius: 30px;
      `

    function addNums() {
        props.setNums(props.nums + 1);
      }

      function subNums() {
        if (props.nums >= 2) {
          props.setNums(props.nums - 1);
        }
      }

    return (
        <NumsContainer>
            <img src={process.env.PUBLIC_URL + "/Images/Main/BtnSub.svg"} 
              onClick={subNums}
            />
            <NumsCount>
              <ContentFontLargeColor>{props.nums}</ContentFontLargeColor>
            </NumsCount>
            <img src={process.env.PUBLIC_URL + "/Images/Main/BtnAdd.svg"} 
              onClick={addNums}
            />
          </NumsContainer>
    )
}