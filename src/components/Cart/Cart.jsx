import './style.css';
import LineItem from 'components/LineItem/LineItem';
import { useState } from 'react';
import product1 from '../../assets/images/product1.jpeg';
import product2 from '../../assets/images/product2.jpeg';

const Cart = () => {
  const productData = [
    {
      id: 1,
      img: product1,
      productName: '破壞補丁修身牛仔褲',
      productCount: 1,
      productPrice: 3999,
      totalPrice: 0,
    },
    {
      id: 2,
      img: product2,
      productName: '刷色直筒牛仔褲',
      productCount: 1,
      productPrice: 1299,
      totalPrice: 0,
    },
  ];

  const [products, setProducts] = useState(productData);
  // const [cartPrice, setCartPrice] = useState(() => {
  //   let price = 0;
  //   price = products.map((product) => product.productPrice + price);
  // });
  // console.log(cartPrice);
  const plusBtnAtClick = (id) => {
    setProducts((prevProducts) => {
      const newProducts = [];
      for (let i = 0; i < prevProducts.length; i += 1) {
        const currentProduct = prevProducts[i];
        if (currentProduct.id === id) {
          let updateProduct = {
            ...currentProduct,
            productCount: currentProduct.productCount + 1,
          };
          updateProduct = {
            ...updateProduct,
            totalPrice: updateProduct.productCount * updateProduct.productPrice,
          };
          newProducts.push(updateProduct);
          // TODO: 算出總價
        } else {
          newProducts.push(currentProduct);
        }
      }
      return newProducts;
    });
  };

  const minusBtnAtClick = (id) => {
    setProducts((prevProducts) => {
      const newProducts = [];
      for (let i = 0; i < prevProducts.length; i += 1) {
        const currentProduct = prevProducts[i];
        if (currentProduct.id === id) {
          let updateProduct = {
            ...currentProduct,
            productCount: currentProduct.productCount - 1,
          };
          updateProduct = {
            ...updateProduct,
            totalPrice: updateProduct.productCount * updateProduct.productPrice,
          };
          newProducts.push(updateProduct);
        } else {
          newProducts.push(currentProduct);
        }
      }
      return newProducts;
    });
  };
  const LineItems = products.map((product) => {
    const { id, img, productName, productCount, productPrice, totalPrice } =
      product;
    return (
      <LineItem
        key={id}
        id={id}
        img={img}
        productName={productName}
        productCount={productCount}
        productPrice={productPrice}
        totalPrice={totalPrice}
        plusBtnAtClick={plusBtnAtClick}
        minusBtnAtClick={minusBtnAtClick}
      />
    );
  });

  return (
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 className="cart-title">購物籃</h3>

      <section className="product-list col col-12" data-total-price="0" />
      {LineItems}
      <section className="cart-info shipping col col-12">
        <div className="text">運費</div>
        <div className="price" />
      </section>
      <section className="cart-info total col col-12">
        <div className="text">小計</div>
        <div className="price">{123}</div>
      </section>
    </section>
  );
};

export default Cart;
