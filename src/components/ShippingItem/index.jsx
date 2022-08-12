import React, { memo } from 'react';

type ShippingItemProps = {
  id: string,
  name: string,
  period: string,
  price: number,
  onSelectShipping: (price: number) => void,
};

const ShippingItem: React.FC<ShippingItemProps> = memo((props) => {
  const { id, name, period, price, onSelectShipping } = props;

  return (
    <label className="radio-group col col-12" data-price={price}>
      <input
        id="shipping-standard"
        type="radio"
        name="shipping"
        defaultChecked={id === '1'}
        onChange={() => onSelectShipping(price)}
      />
      <div className="radio-info">
        <div className="col col-12">
          <div className="text">{name}</div>
          <div className="price">$ {price}</div>
        </div>
        <div className="period col col-12">{period}</div>
      </div>
      <div className="radio-box-border" />
    </label>
  );
});

export default ShippingItem;
