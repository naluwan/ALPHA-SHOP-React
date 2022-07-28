import React, { memo } from 'react';
import ShippingItem from 'components/ShippingItem';

type Step2Props = {
  shippings: array,
  onSelectShipping: (id: string) => void,
};

type ShippingType = {
  id: string,
  name: string,
  period: string,
  price: number,
  checked: boolean,
};

const Step2: React.FC<Step2Props> = memo((props) => {
  const { shippings, onSelectShipping } = props;
  const shippingItems = shippings.map((shipping: ShippingType) => {
    const { id, name, period, price, checked } = shipping;
    return (
      <ShippingItem
        key={id}
        id={id}
        name={name}
        period={period}
        price={price}
        checked={checked}
        onSelectShipping={onSelectShipping}
      />
    );
  });
  return (
    <form className="col col-12" data-phase="shipping">
      <h3 className="form-title">運送方式</h3>
      <section className="form-body col col-12">{shippingItems}</section>
    </form>
  );
});

export default Step2;
