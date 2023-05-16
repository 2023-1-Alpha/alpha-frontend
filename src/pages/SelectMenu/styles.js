import styled from "styled-components";

export const Wrap = styled.div`
  padding-top: 37px;
  display: flex;
  flex-direction: row;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-left: 30px;
`;


export const MenuList = styled.div`
  height: 600px;
  > div {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    gap: 20px 20px;
    > p {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
`;
