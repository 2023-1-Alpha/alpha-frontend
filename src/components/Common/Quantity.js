import React from 'react';
import styled from 'styled-components';
import { ContentFontLargeColor } from '../style/font';

const NumsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 52px;
  > img {
    width: 52px;
    height: 52px;
  }
`;
const NumsCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 244px;
  height: 100%;
  border: 1px solid #df843e;
  border-radius: 30px;
`;
export default function Quantity(props) {
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
      <img
        src={process.env.PUBLIC_URL + '/Images/Main/BtnSub.svg'}
        onClick={subNums}
      />
      <NumsCount>
        <ContentFontLargeColor>{props.nums}</ContentFontLargeColor>
      </NumsCount>
      <img
        src={process.env.PUBLIC_URL + '/Images/Main/BtnAdd.svg'}
        onClick={addNums}
      />
    </NumsContainer>
  );
}
