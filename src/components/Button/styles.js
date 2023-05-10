import styled from "styled-components";

export const WhiteRoundedButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
  background: #ffffff;
  margin: 20px;
  > img {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.1);
    &:hover {
    background-color: #f6f6f6;
  }
  }
  > p {
    font-weight: "1000";
    font-size: "24px";
    color: "#000000";
  }


`;

export const GrayRoundedButton = styled.div`
  display: flex;
  flex-direction: column;
  > img {
    width: 60px;
    height: 60px;
    margin: auto;
    border-radius: 20px;
    background: #f8f8f8;
    padding: 20px;
  }
  > p {
    margin: 0;
    font-weight: 900;
    font-size: 12px;
  }
`;

export const WhiteFlatRoundedButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 24px;
  background: #ffffff;
  border-radius: 30px;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #f6f6f6;
  > p{
    margin: 0;
    font-weight: 700;
    font-size: 4px;
  }
`