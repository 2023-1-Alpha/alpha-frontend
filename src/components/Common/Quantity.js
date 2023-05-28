import React from 'react';
import styled from 'styled-components';
import { ContentFontLargeColor } from '../style/font';

const NumsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: ${(props) => (props.mini ? '' : '52px')};
  > img {
    width: ${(props) => (props.mini ? '22px' : '52px')};
    height: ${(props) => (props.mini ? '22px' : '52px')};
  }
`;
const NumsCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.mini ? '98px' : '244px')};
  height: ${(props) => (props.mini ? '22px' : '100%')};
  border: 1px solid #df843e;
  border-radius: 30px;
`;

const CountMini = styled(ContentFontLargeColor)`
  font-size: 8px;
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
    <NumsContainer mini={props.mini}>
      <img
        src={process.env.PUBLIC_URL + '/Images/Main/BtnSub.svg'}
        onClick={subNums}
      />
      <NumsCount mini={props.mini}>
        {props.mini ? (
          <CountMini>{props.nums}</CountMini>
        ) : (
          <ContentFontLargeColor>{props.nums}</ContentFontLargeColor>
        )}
      </NumsCount>
      <img
        src={process.env.PUBLIC_URL + '/Images/Main/BtnAdd.svg'}
        onClick={addNums}
      />
    </NumsContainer>
  );
}
