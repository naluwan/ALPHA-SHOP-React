import './style.css';
import React from 'react';

type ProgressControlProps = {
  onStep: number,
  onSetStep: Function,
  stepMapLength: number,
};

const ProgressControl: React.FC<ProgressControlProps> = (props) => {
  const { onStep, onSetStep, stepMapLength } = props;

  const nextBtnAtClick = () => {
    onSetStep((prevStep) => prevStep + 1);
  };

  const prevBtnAtClick = () => {
    onSetStep((prevStep) => prevStep - 1);
  };

  return (
    <section className="progress-control-container col-12 pt-5">
      <section className="button-group col-12" data-phase="credit-card">
        <button
          className={`prev ${onStep === 0 ? 'noShow' : ''}`}
          onClick={prevBtnAtClick}
        >
          &larr; 上一步
        </button>
        <div>
          {onStep !== stepMapLength - 1 ? (
            <button className="next btn btn-lg" onClick={nextBtnAtClick}>
              下一步 &rarr;
            </button>
          ) : (
            <button className="next btn btn-lg">確認下單</button>
          )}
        </div>
      </section>
    </section>
  );
};

export default ProgressControl;
