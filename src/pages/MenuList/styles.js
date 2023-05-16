import styled from "styled-components";

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