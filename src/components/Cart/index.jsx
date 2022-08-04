import './style.css';
import LineItem from 'components/LineItem';
import React, { memo } from 'react';
import useCartContext from 'components/Cart/CartContent';

type CartProps = {
  products: array,
  totalProductPrice: number,
  shippingPrice: number,
};

type ProductType = {
  id: string,
  name: string,
  img: string,
  price: number,
  quantity: number,
};

const Cart: React.FC<CartProps> = memo(() => {
  const { products, totalProductPrice, shippingPrice, currentTitle } =
    useCartContext();

  const lineItems = products.map((product: ProductType) => {
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

  const currentPrice = totalProductPrice + shippingPrice;
  return (
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 className="cart-title">購物籃</h3>
      <h3 className="cart-title">目前步驟： {currentTitle}</h3>
      <section className="product-list col col-12" data-total-price="0" />
      {lineItems}
      <section className="cart-info shipping col col-12">
        <div className="text">運費</div>
        <div className="price">$ {shippingPrice}</div>
      </section>
      <section className="cart-info total col col-12">
        <div className="text">小計</div>
        <div className="price">$ {currentPrice}</div>
      </section>
    </section>
  );
});

export default Cart;
