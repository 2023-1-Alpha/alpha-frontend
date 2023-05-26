import React from 'react';
import * as style from './styles';
import { ContentFontLargeWhite } from '../style/font';
import { useNavigate } from 'react-router-dom';

export default function WhiteBorderButton(props) {
  const navigate = useNavigate();
  return (
    <style.WhiteBorderButton
      onClick={() => {
        navigate(props.url);
      }}
      small={props.small}
    >
      {<ContentFontLargeWhite>{props.name}</ContentFontLargeWhite>}
    </style.WhiteBorderButton>
  );
}
