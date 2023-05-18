import styled from "styled-components";

export const DetailHeader = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 30px;
`;

export const Container = styled.div`
  height: 160px;
  position: relative;
`

export const Logo = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  > img {
    width: 100px;
    height: 100px;
  }
`;

export const ProgressInfoContainer = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  height: 10px;
`

export const ProgressDotContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  height: 10px;

  > div{
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    border-radius: 35px;
  }
`;

export const backDot = styled.div`
  border: 10px solid #df843e;
  margin-left: -16px;
  display: ${(props) => (props.count === 0 ? "hidden" : "visible")};
`;

export const backDot2 = styled.div`
  margin-left: -11px;
  border: 10px solid #df843e;
  display: ${(props) => (props.count === 2 ? "visible" : "none")};
`;

export const backDot2_2 = styled.div`
  margin-left: -11px;
  border: 10px solid #eee;
  display: ${(props) => (props.count === 2 ? "none" : "visible")};
`;

export const backDot3 = styled.div`
  border: 10px solid #eee;
  margin-left: -16px;
  display: ${(props) => (props.count === 2 ? "hidden" : "visible")};
  transition: display 0.5s;
`;



export const ProgressContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

  background-color: #eee;
  width: 320px;
  height: 8px;
  display: flex;
  align-items: center;
  border-radius: 20px;
`;

export const Progress = styled.div`
  background-color: #df843e;
  width: ${(props) => props.width};
  height: 100%;
  transition: width 0.5s;
  border-radius: 20px;
  border: #df843e;
`;

export const Dot = styled.div`
  width: 16px;
  height: 16px;
  box-sizing: border-box;
  border: 10px solid #df843e;
  border-radius: 35px;
  margin-left: -16px;
`;
