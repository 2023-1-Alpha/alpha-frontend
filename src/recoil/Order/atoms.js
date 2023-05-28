import { atom } from 'recoil';

export const ordersAtom = atom({
  key: 'ordersAtom',
  default: [
    {
      id: 1,
      name: '치킨 크리스피 버거',
      side: {
        name: '감자튀김',
        price: 1200,
      },
      drink: {
        name: '사이다',
        price: 1200,
      },
      price: 6200,
      number: 1,
    },
    {
      id: 2,
      name: '치킨 크리스피 버거',
      side: {
        name: '감자튀김',
        price: 1200,
      },
      drink: {
        name: '사이다',
        price: 1200,
      },
      price: 6200,
      number: 1,
    },
    {
      id: 3,
      name: '치킨 크리스피 버거',
      side: {
        name: '감자튀김',
        price: 1200,
      },
      drink: {
        name: '사이다',
        price: 1200,
      },
      price: 6200,
      number: 1,
    },
  ],
});
