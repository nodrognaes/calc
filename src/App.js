import './App.css';
import Header from './components/Header/Header';
import Calc from './components/Calc/Calc';
import Footer from './components/Footer/Footer';
import Secret from './components/Secret/Secret';

function App() {
  return (
    <div className="App">
      <Header />
      <Calc />
      {/* <Secret /> */}
      <Footer />
    </div>
  )
}

export default App;
