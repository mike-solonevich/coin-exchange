import React from 'react';
import logo from './logo.svg';
import Header from './components/ExchangeHeader/ExchangeHeader';
import AccountBalance from './components/AccountBalance/AccountBalance';
import CoinList from './components/CoinList/CoinList';
import styled from 'styled-components';

const AppWrapper = styled.div`
  text-align: center;
  background-color: rgb(20, 56, 97);
  color: #cccccc;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 10000,
      coinData: [
        {
          name: 'Bitcoin',
          ticker: 'BTC',
          price: 38999.99
        },
        {
          name: 'Ether',
          ticker: 'ETH',
          price: 8000.00
        },
        {
          name: 'Tether',
          ticker: 'USDT',
          price: 1.00
        },
        {
          name: 'Ripple',
          ticker: 'XRP',
          price: 0.21
        },
        {
          name: 'Bitcoin Cash',
          ticker: 'BCH',
          price: 298.99
        },
      ]
    };
    this.handleRefreshCoinPrice = this.handleRefreshCoinPrice.bind(this);
  }

  handleRefreshCoinPrice(ticker) {
    const randomPercentage = 0.995 + Math.random() * 0.01;
    this.setState(state => {
      // Find our coin by given ticker and update the price.
      state.coinData.find(coin => coin.ticker === ticker).price *= randomPercentage;
      return state;
    });
  }

  render() {
    return (
      <AppWrapper>
        <Header logo={logo} />
        <AccountBalance amount={this.state.balance} />
        <CoinList coinData={this.state.coinData} handleRefreshCoinPrice={this.handleRefreshCoinPrice}/>
      </AppWrapper>
    );
  }
}

export default App;
