import styled from "styled-components";

export const DetailSize = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div {
    width: 220px;
    height: 300px;
    > img {
      width: 120px;
      height: 120px;
      padding: 30px;
      margin-top: 20px;
    }
    > div {
      margin-top: 16px;
    }
  }
`;
