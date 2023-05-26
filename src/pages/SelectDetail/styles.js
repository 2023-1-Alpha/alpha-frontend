import styled from 'styled-components';

export const SelectDetail = styled.div`
  height: calc(100vh - 74px);
  padding: 37px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const btnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  margin-bottom: 40px;
  width: 364px;
  height: 200px;
  border-radius: 30px;
`;
export const countAndCart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  margin-bottom: 26px;
`;

export const AddCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > img {
    width: 150px;
    height: 120px;
    margin-top: 380px;
  }
  > div {
    margin-top: 66px;
  }
`;
