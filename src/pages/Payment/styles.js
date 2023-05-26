import styled from 'styled-components';

export const Payment = styled.div`
  height: calc(100vh - 74px);
  padding: 37px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => (props.count === 2 ? '#DF843E' : 'ffffff')};
`;
