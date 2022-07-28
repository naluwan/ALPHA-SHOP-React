import { memo } from 'react';

const Step3 = memo(() => {
  return (
    <form className="col col-12" data-phase="credit-card">
      <h3 className="form-title">付款資訊</h3>
      <section className="form-body col col-12">
        <div className="col col-12">
          <div className="mb-3 col-10 form-input">
            <label htmlFor="nameInput" className="form-label">
              持卡人姓名
            </label>
            <input
              type="text"
              className="form-control"
              id="nameInput"
              placeholder="John Doe"
            />
          </div>
        </div>
        <div className="col col-12">
          <div className="mb-3 col-10 form-input">
            <label htmlFor="cardNumberInput" className="form-label">
              卡號
            </label>
            <input
              type="text"
              className="form-control"
              id="cardNumberInput"
              placeholder="1111 2222 3333 4444"
            />
          </div>
        </div>
        <div className="col col-12 form-input-group">
          <div className="mb-3 col-6 form-input">
            <label htmlFor="expDateInput" className="form-label">
              有效期限
            </label>
            <input
              type="text"
              className="form-control"
              id="expDateInput"
              placeholder="MM/YY"
            />
          </div>
          <div className="mb-3 col-6 form-input">
            <label htmlFor="checkNumberInput" className="form-label">
              CVC / CCV
            </label>
            <input
              type="text"
              className="form-control"
              id="checkNumberInput"
              placeholder="123"
            />
          </div>
        </div>
      </section>
    </form>
  );
});

export default Step3;
