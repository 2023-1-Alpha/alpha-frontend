import styled from "styled-components";

export const SideCategory = styled.div`
  display: flex;
  align-items: center;
  width: 142px;
  height: 60px;
  background: #ffffff;
  border: none;
  
  &:hover {
    background-color: #f6f6f6;
  }

  background: ${(props) => props.active ? '#f6f6f6' : 'none'};

`;

export const SideImg = styled.img`
  width: 32px;
  height: 32px;
  margin: 12px;
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  > span {
    margin-bottom: auto;
    margin-left: 20px;
    font-size: 32px;
    font-weight: 1000;
  }
`;

export const Categorys = styled.div`
  margin-top: 41px;
`;

export const MenuList = styled.div`
  flex: 1;
  overflow-y: scroll;
  }
`;

export const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  gap: 20px 20px;
`;

export const MenuHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  height: 30px;
  margin: 22px 0;
`;

export const MenuFooter = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #df843e;
  border-radius: 40px 40px 0px 0px;
  align-items: center;
  padding: 20px;
  gap: 13px;
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