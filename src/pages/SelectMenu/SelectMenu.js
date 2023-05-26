import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Modal from 'react-modal';
import * as style from './styles';
import Sidebar from '../../components/Menu/Sidebar';
import MenuHeader from '../../components/Menu/MenuHeader';
import MenuList from '../../components/Menu/MenuList';
import MenuFooter from '../../components/Menu/MenuFooter';
import { SubTitleFont } from '../../components/style/font';
import SetModal from '../../components/Menu/Modal/SetModal';
import SingleModal from '../../components/Menu/Modal/SingleModal';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { ordersAtom } from '../../recoil/Order/atoms';

export default function SelectMenu() {
  const [menuType, setMenuType] = useState(1);
  const [menuTypeName, setMenuTypeName] = useState('버거');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const orderlist = useRecoilValue(ordersAtom);

  console.log(orderlist);

  function getMenutype(menuType, menuTypeName) {
    setMenuType(menuType);
    setMenuTypeName(menuTypeName);
  }

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <>
      {menuType == 1 ? (
        <SetModal closeModal={closeModal} modalIsOpen={modalIsOpen} />
      ) : (
        <SingleModal closeModal={closeModal} modalIsOpen={modalIsOpen} />
      )}
      <style.Wrap>
        <Sidebar menuType={menuType} getMenutype={getMenutype} />
        <style.Menu>
          <SubTitleFont>{menuTypeName}</SubTitleFont>
          <MenuHeader menuType={menuType} />
          <MenuList menuType={menuType} openModal={openModal} />
          <MenuFooter />
        </style.Menu>
      </style.Wrap>
    </>
  );
}
