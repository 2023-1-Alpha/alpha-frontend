import styled from "styled-components";

export const Wrap = styled.div`
  padding: 20px 20px 0;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  padding: 20px 20px 0;
  > img {
    width: 100px;
    height: 100px;
  }
`;
export const ProgressSelectContainer = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 360px;
  height: 10px;
  background-color: red;


`;
export const Select = styled.div`
  
`


export const ProgressDotContainer = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 360px;
  height: 10px;
  
  > div{
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    border-radius: 35px;
  }
`;

export const testDot = styled.div`
  border: 10px solid #df843e;
  margin-left: -16px;
`;

export const testDot2 = styled.div`
  margin-left: -11px;
  border: 10px solid #df843e;
  display: ${(props) => (props.count === 2 ? "visible" : "none")};
`;

export const testDot2_2 = styled.div`
  margin-left: -11px;
  border: 10px solid #eee;
  display: ${(props) => (props.count === 2 ? "none" : "visible")};

`;

export const testDot3 = styled.div`
  border: 10px solid #eee;
  margin-left: -16px;
  display: ${(props) => (props.count === 2 ? "hidden" : "visible")};
  transition: display 0.5s;
`;



export const ProgressContainer = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

  margin: 50px auto;
  background-color: #eee;
  width: 360px;
  height: 10px;
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
