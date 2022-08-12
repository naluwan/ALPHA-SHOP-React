import React from 'react';
import { coupons } from 'components/config';
import useCartContext from 'components/context/CartContent';

const Coupons: React.FC<CouponsProps> = () => {
  const { state, onAddCoupon } = useCartContext();

  return (
    <div className="coupon-btn-group">
      {coupons.map((coupon) => {
        return (
          <button
            key={coupon.id}
            disabled={state.coupon && state.coupon.id === coupon.id}
            className="btn btn-info m-1"
            onClick={() => {
              onAddCoupon(coupon);
            }}
          >
            {coupon.id}
          </button>
        );
      })}
    </div>
  );
};

export default Coupons;
