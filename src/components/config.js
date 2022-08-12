import type { Product, Shipping } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
];

export const coupons = [
  {
    id: 'coupon1',
    discount: 10,
  },
  {
    id: 'coupon2',
    discount: 5,
  },
];

export const SHIPPINGS: Shipping[] = [
  {
    id: '1',
    name: '標準運送',
    period: '約 3~7 個工作天',
    price: 0,
  },
  {
    id: '2',
    name: 'DHL 貨運',
    period: '48 小時內送達',
    price: 500,
  },
];
