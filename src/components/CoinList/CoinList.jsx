import React from 'react';
import Coin from '../Coin/Coin';
import styled from 'styled-components';
const Table = styled.table`
  margin: 50px auto;
  display: inline-block;
  font-size: 1.4rem;
`;

export default function CoinList(props) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Ticker</th>
          <th>Price</th>
          {props.showBalance &&
            <th>Balance</th>
          }
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.coinData.map(coin =>
          <Coin key={coin.coinID}
                coinID={coin.coinID}
                name={coin.name} 
                ticker={coin.ticker} 
                balance={coin.balance}
                price={coin.price} 
                handleRefreshCoinPrice={props.handleRefreshCoinPrice} 
                showBalance={props.showBalance} />
        )}
      </tbody>
    </Table>
  );
}
