import React from "react";
import * as style from "./styles";
import { useState } from "react";

export default function SelectDetail() {
  const [count, setCount] = useState(0);

  function add_count() {
    if (count === 2) {
      setCount(0);
      console.log({ count });
    } else {
      setCount(count + 1);
      console.log({ count });
    }
  }

  return (
    <style.Wrap>
      <style.Header>
        <img src={process.env.PUBLIC_URL + "/Images/Main/logo.svg"} />
      </style.Header>
        <style.ProgressSelectContainer>
          
        </style.ProgressSelectContainer>

      <style.ProgressDotContainer>
        <style.testDot/>
        <style.testDot2 count={count}/>
        <style.testDot2_2 count={count}/>
        <style.testDot3 count={count} />
      </style.ProgressDotContainer>
      <style.ProgressContainer
        onClick={() => {
          add_count();
        }}
      >
        {/* <style.ProgressInfo /> */}
        {/*%로 부모넓이의 1/5 씩 넓어짐*/}
        <style.Progress width={(count / 2) * 100 + "%"}/>

        <style.Dot />

      </style.ProgressContainer>
    </style.Wrap>
  );
}
