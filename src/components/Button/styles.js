import styled from 'styled-components';

export const WhiteRoundedButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 140px;
  background: #ffffff;
  > img {
    width: ${(props) => (props.small ? '60px' : '88px')};
    height: ${(props) => (props.small ? '60px' : '88px')};
    border-radius: 20px;
    padding: 30px;
    border: 1px solid rgba(18, 18, 18, 0.05);
    box-shadow: 0px 4px 22px 6px rgba(0, 0, 0, 0.05);
    margin-bottom: 20px;
    &:hover {
      background-color: #f6f6f6;
    }
  }
`;

export const GrayRoundedButton = styled.div`
  display: flex;
  flex-direction: column;
  > img {
    width: 60px;
    height: 60px;
    border-radius: 20px;
    background: #f8f8f8;
    padding: 20px;
    margin-bottom: 11px;
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
  > div {
    margin: 0;
    font-weight: 700;
    font-size: 4px;
  }
`;

export const WhiteRoundedLargeButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0px 14px 22px -10px rgba(0, 0, 0, 0.05);
  border-radius: 30px;
  width: 220px;
  height: 276px;
  padding-bottom: 24px;
  > img {
    width: 120px;
    height: 120px;
    padding: 30px;
    margin-top: 20px;
  }
`;

export const WhiteRoundedSmallButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  border: 0.5px solid #f1f1f5;
  box-shadow: 0px 7.91127px 12.432px -5.65091px rgba(0, 0, 0, 0.05);
  padding-bottom: 16px;
  width: 145px;
  height: 184px;
  > img {
    width: 80px;
    height: 80px;
    padding: 30px;
  }
`;

export const WhiteBorderButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ffffff;
  border-radius: 50px;
  width: 365px;
  height: ${(props) => (props.small ? '48px' : '52px')};
`;

export const WhiteTransButton = styled.div`
  height: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 50px;
  background-color: #f6f6f620;
`;

export const YellowButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 52px;
  border: none;
  border-radius: 30px;
  background-color: #ffd64f;
`;

export const GrayBorderButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 365px;
  height: 52px;
  border: 1px solid #12121270;
  border-radius: 30px;
`;
