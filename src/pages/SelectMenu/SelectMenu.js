import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Modal from 'react-modal';
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

  const CustomStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      borderRadius: '20px',
      width: '345px',
      height: '345px',
      transform:'translate(-50%, -50%)',
      padding: '80px',
      boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.25)',
      border: '0',
    }
  }

  return (
    <>
      <Modal isOpen={true} style={CustomStyles}>
        <div>
          모달이다
          <p>안뇽</p>
        </div>
      </Modal>
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
    </>
  );
}
