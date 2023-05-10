import styled from "styled-components";

export const SideCategory = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
  height: 60px;
  background: #ffffff;
  border: none;
  > img {
    width: 32px;
    height: 32px;
    margin: 12px;
  };
  
  > p {
    font-weight: 700;
    font-size: 16px;
    color: #000000;
  }
  
  &:hover {
    background-color: #f6f6f6;
  }

  background: ${(props) => props.active ? '#f6f6f6' : 'none'};

`;