import React from "react";
import * as style from "./styles";
import { useState } from "react";
import DetailHeader from "../DetailHeader/DetailHeader";
import DetailSize from "../DetailSize/DetailSize";
import DetailSide from "../DetailSide/DetailSide";
import DetailDrink from "../DetailDrink/DetailDrink";
import DetailFinal from "../DetailFinal/DetailFinal";
import { ContentFontLarge } from "../../components/style/font";

export default function SelectDetail() {
  const [count, setCount] = useState(0);
  const [nums, setNums] = useState(1);

  function getCount() {
    setCount(count);
  }
  function getNums() {
    setNums(nums);
  }
  function addNums() {
    setNums(nums + 1);
  }
  function subNums() {
    if (nums >= 2) {
      setNums(nums - 1);
    }
  }
  function add_count() {
    if (count === 3) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }
  function reset() {
    setCount(0);
    // 페이지 이동
  }

  const menuName = "치킨 크리스피 버거";
  const menuPrice = "1000";
  const menuImg = process.env.PUBLIC_URL + "/Images/Main/Burger1.svg";

  const menuSetName = "치킨 크리스피 버거 세트";
  const menuSetPrice = "3000";
  const menuSetImg = process.env.PUBLIC_URL + "/Images/Main/BurgerSet1.svg";

  return (
    <style.SelectDetail>
      <DetailHeader count={count} getCount={getCount} add_count={add_count} />
      {count === 0 && (
        <DetailSize
          menuName={menuName}
          menuPrice={menuPrice}
          menuImg={menuImg}
          menuSetName={menuSetName}
          menuSetPrice={menuSetPrice}
          menuSetImg={menuSetImg}
          add_count={add_count}
        />
      )}
      {count === 1 && (
        <DetailSide
          menuName={menuName}
          menuPrice={menuPrice}
          menuImg={menuImg}
          menuSetName={menuSetName}
          menuSetPrice={menuSetPrice}
          menuSetImg={menuSetImg}
          add_count={add_count}
        />
      )}

      {count === 2 && (
        <DetailDrink
          menuName={menuName}
          menuPrice={menuPrice}
          menuImg={menuImg}
          menuSetName={menuSetName}
          menuSetPrice={menuSetPrice}
          menuSetImg={menuSetImg}
          add_count={add_count}
        />
      )}

      {count === 3 && (
        <DetailFinal
          menuName={menuName}
          menuPrice={menuPrice}
          menuImg={menuImg}
          menuSetName={menuSetName}
          menuSetPrice={menuSetPrice}
          menuSetImg={menuSetImg}
          add_count={add_count}
          getNums={getNums}
          addNums={addNums}
          subNums={subNums}
        />
      )}
      <style.btnContainer>
        {count === 3 && (<style.countAndCart>
        <style.numsContainer>
            <img src={process.env.PUBLIC_URL + "/Images/Main/BtnSub.svg"} 
              onClick={subNums}
            />
            <style.numsCount>
              <ContentFontLarge style={{ color: "#DF843E" }}>
                {nums}
              </ContentFontLarge>
            </style.numsCount>
            <img src={process.env.PUBLIC_URL + "/Images/Main/BtnAdd.svg"} 
              onClick={addNums}
            />
          </style.numsContainer>
          <style.btnAddCart>
            <ContentFontLarge style={{ color: "#12121270" }}>
              장바구니 추가
            </ContentFontLarge>
          </style.btnAddCart>
        </style.countAndCart>)}
        <style.btnCancel onClick={reset}>
          <ContentFontLarge style={{ color: "#12121270" }}>
            취소
          </ContentFontLarge>
        </style.btnCancel>
      </style.btnContainer>
    </style.SelectDetail>
  );
}
