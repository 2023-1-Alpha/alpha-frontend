import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import * as style from "./styles";
import Sidebar from "../../components/Menu/Sidebar";
import MenuHeader from "../../components/Menu/MenuHeader";
import MenuList from "../../components/Menu/MenuList";
import MenuFooter from "../../components/Menu/MenuFooter";
import { SubTitleFont } from "../../components/style/font";

export default function SelectMenu() {
  const [menuType, setMenuType] = useState(1);
  const [menuTypeName, setMenuTypeName] = useState("버거");

  function getMenutype(menuType, menuTypeName) {
    setMenuType(menuType);
    setMenuTypeName(menuTypeName);
  }

  const location = useLocation();
  console.log(location.state);
  console.log(menuType);
  console.log(menuTypeName);

  return (
    <style.Wrap>
      <Sidebar menuType={menuType} getMenutype={getMenutype} />
      <style.Menu>
        <SubTitleFont>
          {menuTypeName}
        </SubTitleFont>
        <MenuHeader menuType={menuType} />
        <MenuList menuType={menuType} />
        <MenuFooter />
      </style.Menu>
    </style.Wrap>
  );
}
