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
  state = {
    balance: 10000,
    showBalance: true,
    coinData: [
      {
        name: 'Bitcoin',
        ticker: 'BTC',
        balance: 0.5,
        price: 38999.99
      },
      {
        name: 'Ether',
        ticker: 'ETH',
        balance: 20,
        price: 8000.00
      },
      {
        name: 'Tether',
        ticker: 'USDT',
        balance: 15000,
        price: 1.00
      },
      {
        name: 'Ripple',
        ticker: 'XRP',
        balance: 80,
        price: 0.21
      },
      {
        name: 'Bitcoin Cash',
        ticker: 'BCH',
        balance: 10,
        price: 298.99
      },
    ]
  };

  toggleBalanceVisibility = () => {
    this.setState(state => {
      return {
        ...state,
        showBalance: ! state.showBalance
      }
    });
  }

  handleRefreshCoinPrice = (ticker) => {
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
        <AccountBalance amount={this.state.balance} showBalance={this.state.showBalance} toggleBalanceVisibility={this.toggleBalanceVisibility} />
        <CoinList coinData={this.state.coinData} handleRefreshCoinPrice={this.handleRefreshCoinPrice} showBalance={this.state.showBalance} />
      </AppWrapper>
    );
  }
}

export default App;
