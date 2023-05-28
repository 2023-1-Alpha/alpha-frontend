import React, { useEffect, useState } from 'react';
import GrayRoundedButton from '../Button/GrayRoundedButton';
import * as style from './styles';
import axios from 'axios';

export default function MenuList(props) {
  const getMenu = async (menuType) => {
    const fetchMenu = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/menu?category=${menuType}`,
    );
    if (fetchMenu) setMenu(fetchMenu.data.menu);
  };

  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getMenu(props.menuType);
  }, [props.menuType]);

  return (
    <style.MenuList>
      <style.MenuGrid>
        {menu?.length ?
          menu.map((item) => (
            <GrayRoundedButton
              imgSrc={`${process.env.REACT_APP_SERVER_URL}/images/${item._id}.png`}
              menu={item.name}
              price={item.price}
              onClick={() => {
                props.openModal();
                props.getMenuInfo(item.name, item.price);
              }}
            />
          )) : '준비중 입니다.'}
      </style.MenuGrid>
    </style.MenuList>
  );
}
