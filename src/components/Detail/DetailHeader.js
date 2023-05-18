import React from "react";
import * as style from "./styles";
import { ContentFontLarge } from "../../components/style/font";
import Logo from "../../components/Common/Logo";

export default function DetailHeader(props) {
  return (
    <style.DetailHeader>
      <Logo/>
      {props.count <= 2 && <style.Container>
        <style.ProgressInfoContainer>
          <ContentFontLarge
            style={{ color: props.count === 0 ? "#df843e" : "#eee" }}
          >
            크기 선택
          </ContentFontLarge>
          <ContentFontLarge
            style={{ color: props.count === 1 ? "#df843e" : "#eee" }}
          >
            사이드 선택
          </ContentFontLarge>
          <ContentFontLarge
            style={{ color: props.count === 2 ? "#df843e" : "#eee" }}
          >
            음료 선택
          </ContentFontLarge>
        </style.ProgressInfoContainer>
        <style.ProgressDotContainer>
          <style.backDot />
          <style.backDot2 count={props.count} />
          <style.backDot2_2 count={props.count} />
          <style.backDot3 count={props.count} />
        </style.ProgressDotContainer>
        <style.ProgressContainer
          onClick={() => {
            props.add_count();
          }}
        >
          {/* <style.ProgressInfo /> */}
          {/*%로 부모넓이의 1/5 씩 넓어짐*/}
          <style.Progress width={(props.count / 2) * 100 + "%"} />
          <style.Dot />
        </style.ProgressContainer>
      </style.Container>}
    </style.DetailHeader>
  );
}
