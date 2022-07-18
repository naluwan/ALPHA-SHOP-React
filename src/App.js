import FooterComponent from 'components/Footer';
import MainComponent from 'components/Main';
import HeaderComponent from './components/Header';

const App = () => {
  return (
    <div className="App">
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />
    </div>
  );
};

export default App;
