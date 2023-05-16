import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import * as style from "./styles";
import Sidebar from "../Sidebar/Sidebar";
import MenuHeader from "../MenuHeader/MenuHeader";
import MenuList from "../MenuList/MenuList";
import MenuFooter from "../MenuFooter/MenuFooter";

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
        <p style={{ fontWeight: "700", fontSize: "24px", color: "#000000" }}>
          {menuTypeName}
        </p>
        <MenuHeader menuType={menuType} />
        <MenuList menuType={menuType} />
        <MenuFooter />
      </style.Menu>
    </style.Wrap>
  );
}
