import StepProgress from 'components/StepProgress';
import Step1 from 'components/Step1';
import Step2 from 'components/Step2';
import Step3 from 'components/Step3';
import ProgressControl from 'components/ProgressControl';
import Cart from 'components/Cart';
import './style.css';
import { useState, memo, useCallback, useMemo } from 'react';

type ProductType = {
  id: string,
  name: string,
  img: string,
  price: number,
  quantity: number,
};

const initialProducts: ProductType[] = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
];

type ShippingType = {
  id: string,
  name: string,
  period: string,
  price: number,
  checked: boolean,
};

const initialShippings: ShippingType[] = [
  {
    id: '1',
    name: '標準運送',
    period: '約 3~7 個工作天',
    price: 0,
    checked: true,
  },
  {
    id: '2',
    name: 'DHL 貨運',
    period: '48 小時內送達',
    price: 500,
    checked: false,
  },
];

const MainComponent = memo(() => {
  const [step, setStep] = useState(0);
  const [products, setProducts] = useState(initialProducts);
  const [shippings, setShippings] = useState(initialShippings);
  const stepMap = [Step1, Step2, Step3];
  const CurrentStep = stepMap[step];
  const stepTitle = ['寄送地址', '運送方式', '付款資訊'];
  const currentTitle = stepTitle[step];

  const atChangeStep = useCallback((condition: string) => {
    switch (condition) {
      case 'prev':
        setStep((prev) => prev - 1);
        break;
      case 'next':
        setStep((prev) => prev + 1);
        break;
      default:
        break;
    }
  }, []);

  const atClickPlusBtn = useCallback((id: string) => {
    setProducts((prevList) => {
      return prevList.map((product) => {
        if (product.id === id) {
          const { price, quantity } = product;
          const currentQuantity = quantity + 1;
          const currentPrice = (price / quantity) * currentQuantity;
          return {
            ...product,
            price: currentPrice,
            quantity: currentQuantity,
          };
        }
        return product;
      });
    });
  }, []);

  const atClickMinusBtn = useCallback((id: string) => {
    setProducts((prevList) => {
      const newList = prevList.map((product) => {
        if (product.id === id) {
          const { price, quantity } = product;
          const currentQuantity = quantity - 1;
          const currentPrice = (price / quantity) * currentQuantity;
          return {
            ...product,
            price: currentPrice,
            quantity: currentQuantity,
          };
        }
        return product;
      });
      const filterList = newList.filter(
        (product: ProductType) => product.quantity > 0,
      );
      return filterList;
    });
  }, []);

  const totalProductPrice = useMemo(() => {
    if (products.length === 1) {
      return products[0].price;
    }
    if (!products.length) {
      return 0;
    }
    return products.reduce((acc, cur) => acc.price + cur.price);
  }, [products]);

  const atSelectShipping = useCallback((id: string) => {
    setShippings((prevShippings) => {
      prevShippings.map((shipping: ShippingType) => {
        if (shipping.id === id) {
          return {
            ...shipping,
            checked: true,
          };
        }
        return {
          ...shipping,
          checked: false,
        };
      });
    });
  }, []);

  const shippingPrice = useMemo(() => {
    const shippingSelected = shippings.filter(
      (shipping: ShippingType) => shipping.checked,
    );
    return shippingSelected[0].price;
  }, [shippings]);

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
            <form className="col col-12">
              <h3 className="form-title">{currentTitle}</h3>
              {step !== 1 ? (
                <CurrentStep />
              ) : (
                <CurrentStep
                  shippings={shippings}
                  onSelectShipping={atSelectShipping}
                />
              )}
            </form>
          </section>
          <ProgressControl step={step} onChangeStep={atChangeStep} />
        </section>
        <Cart
          products={products}
          totalProductPrice={totalProductPrice}
          shippingPrice={shippingPrice}
          onClickPlusBtn={atClickPlusBtn}
          onClickMinusBtn={atClickMinusBtn}
        />
      </div>
    </main>
  );
});

export default MainComponent;
