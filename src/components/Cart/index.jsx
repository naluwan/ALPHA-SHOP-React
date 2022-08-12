import './style.css';
import LineItem from 'components/LineItem';
import React, { memo } from 'react';
import useCartContext from 'components/context/CartContent';
import Coupons from 'components/Coupons';
import type { Product } from '../types';

type CartProps = {
  currentTitle: string,
};

const Cart: React.FC<CartProps> = memo((props) => {
  const { currentTitle } = props;
  const { state } = useCartContext();

  const lineItems = state.products.map((product: Product) => {
    const { id, name, img, price, quantity } = product;
    return (
      <LineItem
        key={id}
        id={id}
        name={name}
        img={img}
        price={price}
        quantity={quantity}
      />
    );
  });

  return (
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 className="cart-title">購物籃</h3>
      <h3 className="cart-title">目前步驟： {currentTitle}</h3>
      <section className="product-list col col-12" data-total-price="0" />
      {lineItems}
      <section className="cart-info coupon col col-12">
        <Coupons />
        {state.coupon && (
          <div className="text">使用折扣碼：{state.coupon.id}</div>
        )}
        {state.coupon && (
          <div className="price">折購金額：$ {state.coupon.discount}</div>
        )}
      </section>
      <section className="cart-info shipping col col-12">
        <div className="text">運費</div>
        <div className="price">$ {state.shippingPrice}</div>
      </section>
      <section className="cart-info total col col-12">
        <div className="text">小計</div>
        <div className="price">$ {state.totalAmount}</div>
      </section>
    </section>
  );
});

export default Cart;
