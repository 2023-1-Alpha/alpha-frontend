import styled from "styled-components";

export const DetailSide = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, auto));
  gap: 10px 10px;
  > div {
    width: 145px;
    height: 200px;
    > img {
      width: 80px;
      height: 80px;
      padding: 30px;
    }
  }
`;
