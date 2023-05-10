import styled from "styled-components";

export const Wrap = styled.div`
  padding: 20px 20px 0;
  display: flex;
  flex-direction: row;
`;

export const Sidebar = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  > img {
    width: 100px;
    height: 100px;
  }
  > span {
    margin-bottom: auto;
    margin-left: 20px;
    font-size: 32px;
    font-weight: 1000;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100vh;
`;

export const MenuHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  height: 30px;
  margin-left:10px;
`

export const MenuList = styled.div`
  height: 600px;
  > div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30%, auto));
    grid-template-rows: repeat(auto-fill, minmax(20%, auto));
    gap: 20px 10px;
    padding: 8px;
    > p {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
`;
export const MenuFooter = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #df843e;
  border-radius: 20px 20px 0px 0px;
  align-items: center;
  color: #ffffff;
  padding: 0px 10px 10px 10px;
`;

export const orderInfo = styled.div`
  width: 100%;
  display: grid;
  text-align: center;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
`;

export const price = styled.p`
  font-size: 24px;
  font-weight: 700;
`;

export const orderList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 900;
  font-size: 12px;
  border-radius: 50px;
  background-color: #f6f6f620;
`;

export const btnHome = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 50px;
  border: 1px solid #ffffff;
  color: #ffffff;
  width: 100%;
  font-size: 12px;
  font-weight: 600;

  > p {
    align-content: center;
    text-align: center;
  }
`;
