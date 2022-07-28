import React, { memo } from 'react';

type ShippingItemProps = {
  id: string,
  name: string,
  period: string,
  price: number,
  checked: boolean,
  onSelectShipping: (id: string) => void,
};

const ShippingItem: React.FC<ShippingItemProps> = memo((props) => {
  const { id, name, period, price, checked, onSelectShipping } = props;

  return (
    <label className="radio-group col col-12" data-price={price}>
      <input
        id="shipping-standard"
        type="radio"
        name="shipping"
        defaultChecked={checked}
        onChange={() => onSelectShipping(id)}
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
