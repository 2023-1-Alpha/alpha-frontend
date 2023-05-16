import styled from 'styled-components';


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
  > div {
    color: #ffffff;
  }
`;

export const orderList = styled.div`
  height: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 50px;
  background-color: #f6f6f620;
  > div{
    font-weight: 900;
    color: #ffffff;
  }
`;

export const btnHome = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid #ffffff;
  border-radius: 50px;
  > div {
    align-content: center;
    text-align: center;
    color: #ffffff;
  }
`;