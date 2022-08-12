import './style.css';
import React, { memo } from 'react';

type ProgressControlProps = {
  step: number,
  onChangeStep: (step: number) => void,
};

const ProgressControl: React.FC<ProgressControlProps> = memo((props) => {
  const { step, onChangeStep } = props;
  return (
    <section className="progress-control-container col-12 pt-5">
      <section className="button-group col-12" data-phase="credit-card">
        <button
          className={`prev ${step === 0 ? 'noShow' : ''}`}
          onClick={() => onChangeStep(step - 1)}
        >
          &larr; 上一步
        </button>
        <div>
          {step !== 2 ? (
            <button
              className="next btn btn-lg"
              onClick={() => onChangeStep(step + 1)}
            >
              下一步 &rarr;
            </button>
          ) : (
            <button className="next btn btn-lg">確認下單</button>
          )}
        </div>
      </section>
    </section>
  );
});

export default ProgressControl;
