import './style.css';
import React, { memo } from 'react';
import useCartContext from 'components/context/CartContent';
import { LineItemType } from 'components/types';

const LineItem: React.FC<LineItemType> = memo((props) => {
  const { id, name, img, price, quantity } = props;
  const { onUpdateQuantity } = useCartContext();
  return (
    <div className="product-container col col-12">
      <img className="img-container" src={img} alt="product-img" />
      <div className="product-info">
        <div className="product-name">{name}</div>
        <div className="product-control-container">
          <div className="product-control">
            <button
              className="product-action btn btn-secondary"
              disabled={quantity === 1}
              onClick={() => onUpdateQuantity(id, quantity - 1)}
            >
              <span className="minus">-</span>
            </button>
            <span className="product-count">{quantity}</span>
            <button
              className="product-action btn btn-secondary"
              onClick={() => onUpdateQuantity(id, quantity + 1)}
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
