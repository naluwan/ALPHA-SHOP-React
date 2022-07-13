import FooterComponent from 'components/Footer/FooterComponent';
import MainComponent from 'components/Main/MainComponent';
import HeaderComponent from './components/Header/HeaderComponent';

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
