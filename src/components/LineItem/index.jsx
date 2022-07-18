import './style.css';

const LineItem = (props) => {
  const {
    id,
    img,
    productName,
    productCount,
    productPrice,
    totalPrice,
    plusBtnAtClick,
    minusBtnAtClick,
  } = props;

  const currentPrice = totalPrice === 0 ? productPrice : totalPrice;
  return (
    <div className="product-container col col-12">
      <img className="img-container" src={img} alt="product-img" />
      <div className="product-info">
        <div className="product-name">{productName}</div>
        <div className="product-control-container">
          <div className="product-control">
            <button
              className="product-action btn btn-secondary"
              onClick={() => minusBtnAtClick(id)}
            >
              <span className="minus">-</span>
            </button>
            <span className="product-count">{productCount}</span>
            <button
              className="product-action btn btn-secondary"
              onClick={() => plusBtnAtClick(id)}
            >
              <span className="plus">+</span>
            </button>
          </div>
        </div>
        <div className="price">{currentPrice}</div>
      </div>
    </div>
  );
};

export default LineItem;
