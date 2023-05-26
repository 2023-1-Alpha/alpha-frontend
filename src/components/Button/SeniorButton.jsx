import styled from 'styled-components';

const BigButton = styled.button`
  width: 525px;
  height: 285px;
  background: #df843e;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0px 14px 22px -10px rgba(0, 0, 0, 0.05);
  border-radius: 30px;
  font-family: 'IBM Plex Sans KR';
  font-style: normal;
  font-weight: 600;
  font-size: 72px;
  line-height: 120px;
  text-align: center;
  color: #ffffff;
`;

const SmallButton = styled.button`
  width: 525px;
  height: 176px;
  background: #df843e;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0px 14px 22px -10px rgba(0, 0, 0, 0.05);
  border-radius: 30px;
  font-family: 'IBM Plex Sans KR';
  font-style: normal;
  font-weight: 600;
  font-size: 55px;
  line-height: 82px;
  text-align: center;
  color: #ffffff;
`;

const GoBackHomeButton = styled.button`
  display: flex;
  width: 525px;
  gap: 20px;
  background: #df843e;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0px 14px 22px -10px rgba(0, 0, 0, 0.05);
  border-radius: 30px;
  padding: 22px;
  font-family: 'IBM Plex Sans KR';
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 60px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;

const CancelButton = styled.button`
  padding: 30px;
  border: 1px solid rgba(18, 18, 18, 0.2);
  border-radius: 40px;
  font-family: 'IBMPlexSansBold';
  background: #ffffff;
  font-size: 30px;
  color: rgba(18, 18, 18, 0.7);
  width: 455px;
`;

export function SeniorBigButton({ children, onClick }) {
  return <BigButton onClick={onClick}>{children}</BigButton>;
}

export function SeniorSmallButton({ children, onClick }) {
  return <SmallButton onClick={onClick}>{children}</SmallButton>;
}

export function SeniorGoToHomeButton({ onClick }) {
  return (
    <GoBackHomeButton onClick={onClick}>
      {
        <>
          <img
            src={process.env.PUBLIC_URL + '/Images/Main/LeftArrow.svg'}
            alt="left arrow"
          />
          처음부터 다시 주문하기
        </>
      }
    </GoBackHomeButton>
  );
}

export function SeniorCancelButton({ children, onClick }) {
  return <CancelButton onClick={onClick}>{children}</CancelButton>;
}
