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

const MainComponent = memo(() => {
  const [step, setStep] = useState(0);
  const [products, setProducts] = useState(initialProducts);
  const stepMap = [Step1, Step2, Step3];
  const CurrentStep = stepMap[step];

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

  const atClickPlusBtn = useCallback(
    (productId: string) => {
      const newProducts = products.map((product: ProductType) => {
        const { id, name, img, price, quantity } = product;
        if (product.id === productId) {
          const currentQuantity = quantity + 1;
          const currentPrice = (price / quantity) * currentQuantity;
          return {
            id,
            name,
            img,
            price: currentPrice,
            quantity: currentQuantity,
          };
        }
        return product;
      });
      setProducts(newProducts);
    },
    [products],
  );

  const atClickMinusBtn = useCallback(
    (productId: string) => {
      let newProducts = products.map((product: ProductType) => {
        const { id, name, img, price, quantity } = product;
        if (product.id === productId) {
          const currentQuantity = quantity - 1;
          const currentPrice = (price / quantity) * currentQuantity;
          return {
            id,
            name,
            img,
            price: currentPrice,
            quantity: currentQuantity,
          };
        }
        return product;
      });
      newProducts = newProducts.filter(
        (product: ProductType) => product.quantity > 0,
      );
      setProducts(newProducts);
    },
    [products],
  );

  const totalProductPrice = useMemo(() => {
    if (products.length === 1) {
      return products[0].price;
    }
    return products.reduce((acc, cur) => acc.price + cur.price);
  }, [products]);

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
          <ProgressControl step={step} onChangeStep={atChangeStep} />
        </section>
        <Cart
          products={products}
          totalProductPrice={totalProductPrice}
          onClickPlusBtn={atClickPlusBtn}
          onClickMinusBtn={atClickMinusBtn}
        />
      </div>
    </main>
  );
});

export default MainComponent;
