import './style.css';
import React, { memo } from 'react';
import useCartContext from 'components/Cart/CartContent';

type LineItemProps = {
  id: string,
  name: string,
  img: string,
  price: number,
  quantity: number,
};

const LineItem: React.FC<LineItemProps> = memo((props) => {
  const { onClickPlusBtn, onClickMinusBtn } = useCartContext();
  const { id, name, img, price, quantity } = props;

  return (
    <div className="product-container col col-12">
      <img className="img-container" src={img} alt="product-img" />
      <div className="product-info">
        <div className="product-name">{name}</div>
        <div className="product-control-container">
          <div className="product-control">
            <button
              className="product-action btn btn-secondary"
              onClick={() => onClickMinusBtn(id)}
            >
              <span className="minus">-</span>
            </button>
            <span className="product-count">{quantity}</span>
            <button
              className="product-action btn btn-secondary"
              onClick={() => onClickPlusBtn(id)}
            >
              <span className="plus">+</span>
            </button>
          </div>
        </div>
        <div className="price">{price}</div>
      </div>
    </div>
  );
});

export default LineItem;
