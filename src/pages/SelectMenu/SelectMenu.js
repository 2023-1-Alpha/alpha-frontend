import React from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import * as style from './styles';
import Sidebar from '../../components/Menu/Sidebar';
import MenuHeader from '../../components/Menu/MenuHeader';
import MenuList from '../../components/Menu/MenuList';
import MenuFooter from '../../components/Menu/MenuFooter';
import { SubTitleFont } from '../../components/style/font';
import SetModal from '../../components/Menu/Modal/SetModal';
import SingleModal from '../../components/Menu/Modal/SingleModal';
import { useRecoilState } from 'recoil';
import { ordersAtom } from '../../recoil/Order/atoms';

export default function SelectMenu() {
  const [menuType, setMenuType] = useState(1);
  const [menuTypeName, setMenuTypeName] = useState('버거');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [menuName, setMenuName] = useState('');
  const [menuPrice, setMenuPrice] = useState('');
  const [orders, setOrders] = useRecoilState(ordersAtom);
  const [selectItem, setSelectItem] = useState(null);
  const navigate = useNavigate();

  const UpdateSingleOrder = (nums) => {
    setOrders((prevOrders) => {
      const updatedOrder = {
        name: menuName,
        side: null,
        drink: null,
        price: menuPrice,
        number: nums,
      };
      return [...prevOrders, updatedOrder];
    });
    navigate('/selectDetail', { state: { singleMenu: true } });
  };

  function getMenutype(menuType, menuTypeName) {
    setMenuType(menuType);
    setMenuTypeName(menuTypeName);
  }
  function getMenuInfo(menuName, menuPrice) {
    setMenuName(menuName);
    setMenuPrice(menuPrice);
  }
  function openModal(item) {
    setModalIsOpen(true);
    setSelectItem(item);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <>
      {menuType == 1 ? (
        <SetModal
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
          menuName={menuName}
          menuPrice={menuPrice}
          UpdateSingleOrder={UpdateSingleOrder}
        />
      ) : (
        <SingleModal
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
          menuName={menuName}
          menuPrice={menuPrice}
          UpdateSingleOrder={UpdateSingleOrder}
          item={selectItem}
        />
      )}
      <style.Wrap>
        <Sidebar menuType={menuType} getMenutype={getMenutype} />
        <style.Menu>
          <SubTitleFont>{menuTypeName}</SubTitleFont>
          <MenuHeader />
          <MenuList
            menuType={menuType}
            openModal={openModal}
            getMenuInfo={getMenuInfo}
          />
          <MenuFooter />
        </style.Menu>
      </style.Wrap>
    </>
  );
}
