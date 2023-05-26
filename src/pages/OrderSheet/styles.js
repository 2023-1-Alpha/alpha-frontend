import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: #df843e;
  height: calc(100vh - 6px);
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
`;

export const PriceWrap = styled.div`
  display: flex;
  gap: 58px;
  padding: 22px 0;
  margin: 0 35px;
  width: 85%;
  justify-content: flex-end;
  border-bottom: 1px solid rgba(246, 246, 246, 0.2);
`;

export const BtnWrap = styled.div`
  display: flex;
  gap: 65px;
  margin-top: 22px;
`;
