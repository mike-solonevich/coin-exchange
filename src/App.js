import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import Header from './components/ExchangeHeader/ExchangeHeader';
import AccountBalance from './components/AccountBalance/AccountBalance';
import CoinList from './components/CoinList/CoinList';
import styled from 'styled-components';
import axios from 'axios';

const AppWrapper = styled.div`
  text-align: center;
  background-color: rgb(20, 56, 97);
  color: #cccccc;
`;

const COIN_COUNT = 5;

function App(props) {
  const [balance, setBalance] = useState(10000);
  const [showBalance, setShowBalance] = useState(true);
  const [coinData, setCoinData] = useState([]);

  const componentDidMount = async () => {
    const response = await axios.get('https://api.coinpaprika.com/v1/coins');
    const coinIDs = response.data.slice(0, COIN_COUNT).map(coin => coin.id);
    const pricePromises = coinIDs.map(id => axios.get(`https://api.coinpaprika.com/v1/tickers/${id}`));
    const coinPriceData = await Promise.all(pricePromises);
    const coinData = coinPriceData.map(function(coin) {
      return {
        coinID: coin.data.id,
        name: coin.data.name,
        ticker: coin.data.symbol,
        balance: 0,
        price: coin.data.quotes.USD.price
      };
    });
    setCoinData(coinData);    
  }

  useEffect(() => {
    if (coinData.length === 0) {
      componentDidMount();
    }
  });

  const toggleBalanceVisibility = () => {
    setShowBalance(showBalance => ! showBalance);
  }

  const handleRefreshCoinPrice = async (coinID) => {
    const newPrice = await axios.get(`https://api.coinpaprika.com/v1/tickers/${coinID}`);
    const newCoinData = coinData.map(coin => {
      if (coin.coinID === coinID) {
        coin.price = newPrice.data.quotes.USD.price;
      }
      return coin;
    });
    setCoinData(newCoinData);
  }

  return (
    <AppWrapper>
      <Header logo={logo} />
      <AccountBalance amount={balance} showBalance={showBalance} toggleBalanceVisibility={toggleBalanceVisibility} />
      <CoinList coinData={coinData} handleRefreshCoinPrice={handleRefreshCoinPrice} showBalance={showBalance} />
    </AppWrapper>
  );
}

export default App;
