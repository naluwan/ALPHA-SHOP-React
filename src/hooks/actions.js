import { Coupon } from 'components/types';

export type Action =
  | { type: 'UPDATE_QUANTITY', payload: string, quantity: number }
  | { type: 'ADD_COUPON', payload: Coupon }
  | { type: 'CHANGE_STEP', payload: string }
  | { type: 'SELECT_SHIPPING', payload: number };

export const actionSelectShipping = (shippingPrice: number) => {
  return {
    type: 'SELECT_SHIPPING',
    payload: shippingPrice,
  };
};

export const actionChangeStep = (step: number) => {
  return {
    type: 'CHANGE_STEP',
    payload: step,
  };
};

export const actionUpdateQuantity = (id: string, quantity: number) => {
  return {
    type: 'UPDATE_QUANTITY',
    payload: id,
    quantity,
  };
};

export const actionAddCoupon = (coupon: Coupon) => {
  return {
    type: 'ADD_COUPON',
    payload: coupon,
  };
};
