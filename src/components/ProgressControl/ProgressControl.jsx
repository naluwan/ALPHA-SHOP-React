import './style.css';

const ProgressControl = () => {
  return (
    <section className="progress-control-container col-12 pt-5">
      <section className="button-group col-12" data-phase="credit-card">
        <button className="prev">&larr; 上一步</button>
        <div>
          <button className="next btn btn-lg">下一步 &rarr;</button>
          <button className="next btn btn-lg">確認下單</button>
        </div>
      </section>
    </section>
  );
};

export default ProgressControl;
