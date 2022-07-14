import './style.css';
import LineItem from 'components/LineItem/LineItem';
import product1 from '../../assert/images/product1.jpeg';
import product2 from '../../assert/images/product2.jpeg';

const Cart = () => {
  const dummyData = [
    {
      id: 1,
      img: product1,
      productName: '破壞補丁修身牛仔褲',
      productCount: 1,
      productPrice: 3999,
    },
    {
      id: 2,
      img: product2,
      productName: '刷色直筒牛仔褲',
      productCount: 1,
      productPrice: 1299,
    },
  ];

  const LineItems = dummyData.map((product) => {
    const { id, img, productName, productCount, productPrice } = product;
    return (
      <LineItem
        key={id}
        img={img}
        productName={productName}
        productCount={productCount}
        productPrice={productPrice}
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
        <div className="price" />
      </section>
    </section>
  );
};

export default Cart;
