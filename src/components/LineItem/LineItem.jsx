import './style.css';

const LineItem = (props) => {
  const { img, productName, productCount, productPrice } = props;
  return (
    <div
      className="product-container col col-12"
      data-count="0"
      data-price="3999"
    >
      <img className="img-container" src={img} alt="product-img" />
      <div className="product-info">
        <div className="product-name">{productName}</div>
        <div className="product-control-container">
          <div className="product-control">
            <button className="product-action btn btn-secondary">
              <span className="minus">-</span>
            </button>
            <span className="product-count">{productCount}</span>
            <button className="product-action btn btn-secondary">
              <span className="plus">+</span>
            </button>
          </div>
        </div>
        <div className="price">{productPrice}</div>
      </div>
    </div>
  );
};

export default LineItem;
