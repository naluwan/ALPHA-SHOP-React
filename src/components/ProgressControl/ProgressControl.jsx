import './style.css';

const ProgressControl = (props) => {
  const { onStep, onSetStep } = props;
  let nextStep;
  let prevStep;
  if (onStep === 'step1') {
    nextStep = 'step2';
  } else if (onStep === 'step2') {
    nextStep = 'step3';
    prevStep = 'step1';
  } else {
    prevStep = 'step2';
  }

  const nextBtnAtClick = () => {
    onSetStep(nextStep);
  };

  const prevBtnAtClick = () => {
    onSetStep(prevStep);
  };

  return (
    <section className="progress-control-container col-12 pt-5">
      <section className="button-group col-12" data-phase="credit-card">
        <button
          className={`prev ${onStep === 'step1' ? 'noShow' : ''}`}
          onClick={prevBtnAtClick}
        >
          &larr; 上一步
        </button>
        <div>
          {onStep !== 'step3' ? (
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
