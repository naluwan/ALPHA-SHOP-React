import StepProgress from 'components/StepProgress';
import Step1 from 'components/Step1';
import Step2 from 'components/Step2';
import Step3 from 'components/Step3';
import ProgressControl from 'components/ProgressControl';
import Cart from 'components/Cart';
import './style.css';
import { useState } from 'react';

const MainComponent = () => {
  const [step, setStep] = useState(0);
  const stepMap = [Step1, Step2, Step3];
  const CurrentStep = stepMap[step];
  return (
    <main className="site-main">
      <div className="main-container">
        <section
          className="register-container col col-lg-6 col-sm-12"
          data-phase="1"
          data-total-price="0"
        >
          <StepProgress step={step} />
          <section className="form-container col col-12 pt-5">
            <CurrentStep />
          </section>
          <ProgressControl step={step} onSetStep={setStep} />
        </section>
        <Cart />
      </div>
    </main>
  );
};

export default MainComponent;
