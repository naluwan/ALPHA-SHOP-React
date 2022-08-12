import React, { memo } from 'react';
import ShippingItem from 'components/ShippingItem';
import useCartContext from 'components/context/CartContent';
import { SHIPPINGS } from 'components/config';
import type { Shipping } from 'components/types';

const Step2: React.FC<Step2Props> = memo(() => {
  const { onSelectShipping } = useCartContext();

  const shippingItems = SHIPPINGS.map((shipping: Shipping) => {
    const { id, name, period, price } = shipping;
    return (
      <ShippingItem
        key={id}
        id={id}
        name={name}
        period={period}
        price={price}
        onSelectShipping={onSelectShipping}
      />
    );
  });

  return <section className="form-body col col-12">{shippingItems}</section>;
});

export default Step2;
