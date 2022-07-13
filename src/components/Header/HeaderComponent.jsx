import './style.css';

const HeaderComponent = () => {
  return (
    <header>
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">
            <h6>男款</h6>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            <h6>女款</h6>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            <h6>最新消息</h6>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            <h6>客製商品</h6>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            <h6>聯絡我們</h6>
          </a>
        </li>
      </ul>
    </header>
  );
};

export default HeaderComponent;
