import styled from 'styled-components';

export const DetailFinal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  > hr{
    width: 100px;
    border: 2px solid #DF843E;
    margin-bottom: 16px;
  }
  > img{
    width: 240px;
    height: 240px;
    margin-top: 40px;
  }
`;


export const btnCancel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 364px;
  height: 52px;
  border: 1px solid #12121270;
  border-radius: 30px;
`