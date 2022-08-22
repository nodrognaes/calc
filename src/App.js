import './App.css';
import Header from './components/Header/Header';
import Calc from './components/Calc/Calc';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App" id="app">
      <Header />
      <Calc id="calc"/>
      <Footer />
    </div>
  )
}

export default App;
