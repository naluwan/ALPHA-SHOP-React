import StepProgress from 'components/StepProgress/StepProgress';
// import Step1 from 'components/Step1/Step1';
// import Step2 from 'components/Step2/Step2';
import Step3 from 'components/Step3/Step3';
import ProgressControl from 'components/ProgressControl/ProgressControl';
import './style.css';

const MainComponent = () => {
  return (
    <main className="site-main">
      <div className="main-container">
        <section
          className="register-container col col-lg-6 col-sm-12"
          data-phase="1"
          data-total-price="0"
        >
          <StepProgress />
          <section className="form-container col col-12 pt-5">
            {/* <Step1 /> */}
            {/* <Step2 /> */}
            <Step3 />
          </section>
          <ProgressControl />
        </section>
        <section className="col section-right">
          <h1>section right</h1>
        </section>
      </div>
    </main>
  );
};

export default MainComponent;
