import { useReducer } from 'react';
import { PRODUCTS } from 'components/config';
import { Coupon, State, Product } from '../components/types';
import type { Action } from './actions';

const initialState: State = {
  products: PRODUCTS,
  totalAmount: PRODUCTS.reduce((total, currentItem) => {
    return total + currentItem.price * currentItem.quantity;
  }, 0),
  coupon: null,
  step: 0,
  shippingPrice: 0,
};

// 計算總金額
const calcTotalAmount = (
  products: Product[],
  coupon: Coupon | null,
  shippingPrice: number,
) => {
  const totalAmount = products.reduce((total, currentItem) => {
    return total + currentItem.price * currentItem.quantity;
  }, 0);

  let currentTotalAmount = totalAmount;

  if (coupon) {
    currentTotalAmount -= coupon.discount;
  }

  if (shippingPrice) {
    currentTotalAmount += shippingPrice;
  }

  return currentTotalAmount;
};

// 更新購物車數量
const updateQuantity = (products: Product[], id: String, quantity) => {
  return products.map((item: Product) => {
    if (item.id === id) {
      return {
        ...item,
        quantity,
      };
    }
    return item;
  });
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'UPDATE_QUANTITY': {
      const id = action.payload;
      const { quantity } = action;
      const products = updateQuantity(state.products, id, quantity);
      return {
        ...state,
        products,
        totalAmount: calcTotalAmount(
          products,
          state.coupon,
          state.shippingPrice,
        ),
      };
    }
    case 'ADD_COUPON': {
      const coupon = action.payload;
      return {
        ...state,
        coupon,
        totalAmount: calcTotalAmount(state.lineItems, coupon),
      };
    }
    case 'CHANGE_STEP': {
      const step = action.payload;
      return {
        ...state,
        step,
      };
    }
    case 'SELECT_SHIPPING': {
      const shippingPrice = action.payload;
      return {
        ...state,
        shippingPrice,
        totalAmount: calcTotalAmount(
          state.products,
          state.coupon,
          shippingPrice,
        ),
      };
    }

    default:
      return state;
  }
};

export default function useShoppingCart() {
  return useReducer(reducer, initialState);
}
