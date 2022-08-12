import React from 'react';
import { coupons } from 'components/config';

type CounponsProps = {
  onAddCoupon: (coupon: string) => void,
};

const Coupons: React.FC<CounponsProps> = (props) => {
  const { onAddCoupon } = props;

  return (
    <div className="coupon-btn-group">
      {coupons.map((coupon) => {
        return (
          <button
            key={coupon.id}
            className="btn btn-info"
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
