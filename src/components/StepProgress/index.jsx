import './style.css';
import cx from 'classnames';
import React from 'react';

type StepProgressProps = {
  step: number,
};

const StepProgress: React.FC<StepProgressProps> = (props) => {
  const { step } = props;
  return (
    <>
      {/* <!-- register-title --> */}
      <h2 className="register-title col col-12"> 結帳</h2>

      <div className="wizard">
        {/* <!-- Step --> */}
        <div className="wizard__step">
          <div className="wizard__dot">
            {/* <!-- The left connector --> */}
            <div className={cx('wizard__connector', step >= 0 && 'active')} />

            {/* <!-- The step number --> */}
            <div className={cx('wizard__number', step >= 0 && 'active')}>1</div>

            {/* <!-- The right connector --> */}
            <div className={cx('wizard__connector', step >= 0 && 'active')} />
          </div>
          {/* <!-- Title of step --> */}
          寄送地址
        </div>

        {/* <!-- Step --> */}
        <div className="wizard__step">
          <div className="wizard__dot">
            {/* <!-- The left connector --> */}
            <div className={cx('wizard__connector', step >= 1 && 'active')} />

            {/* <!-- The step number --> */}
            <div className={cx('wizard__number', step >= 1 && 'active')}>2</div>

            {/* <!-- The right connector --> */}
            <div className={cx('wizard__connector', step >= 1 && 'active')} />
          </div>
          {/* <!-- Title of step --> */}
          運送方式
        </div>

        {/* <!-- Step --> */}
        <div className="wizard__step">
          <div className="wizard__dot">
            {/* <!-- The left connector --> */}
            <div className={cx('wizard__connector', step === 2 && 'active')} />

            {/* <!-- The step number --> */}
            <div className={cx('wizard__number', step === 2 && 'active')}>
              3
            </div>

            {/* <!-- The right connector --> */}
            <div className={cx('wizard__connector', step === 2 && 'active')} />
          </div>
          {/* <!-- Title of step --> */}
          付款資訊
        </div>
      </div>
    </>
  );
};

export default StepProgress;
