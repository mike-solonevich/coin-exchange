import logo from './logo.svg';
import './App.css';
import Coin from './components/Coin/Coin';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">
          Coin Exchange
        </h1>
      </header>
      <table className="coin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <Coin name="Bitcoin" ticker="BTC" price={28000.99} />
          <Coin name="Ether" ticker="ETH" price={8000.00} />
          <Coin name="Tether" ticker="USDT" price={1.0} />
          <Coin name="Ripple" ticker="XRP" price={0.21} />
        </tbody>
      </table>
    </div>
  );
}

export default App;
