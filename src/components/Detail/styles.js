import styled from "styled-components";

export const btnCancel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 364px;
  height: 52px;
  border: 1px solid #12121270;
  border-radius: 30px;
`;

// DetailHeader

export const DetailHeader = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 30px;
`;

export const Container = styled.div`
  height: 160px;
  position: relative;
`;

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
`;

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

  > div {
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

// DetailSize

export const DetailSize = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  flex: 1;
`;

// DetailSide
export const DetailSide = styled.div`
  width: 455px;
  overflow-y: scroll;
  flex: 1;
`;

export const DetailSideInnerDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, auto));
  gap: 10px 10px;
`;

// DetailDrink

export const DetailDrink = styled.div`
  width: 455px;
  overflow-y: scroll;
  flex: 1;
`;
export const DetailDrinkInnerDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, auto));
  gap: 10px 10px;
`;
// DetailFinal

export const DetailFinal = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  > hr {
    width: 100px;
    border: 2px solid #df843e;
    margin-bottom: 16px;
  }
  > img {
    width: 240px;
    height: 240px;
    margin-top: 40px;
  }
`;
