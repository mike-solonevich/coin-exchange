import React from 'react';
import Coin from '../Coin/Coin';
import styled from 'styled-components';
const Table = styled.table`
  margin: 0 auto;
  font-size: 1.4rem;
`;

export default function CoinList(props) {
  return (
    <Table className="table table-primary table-borders">
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
                handleActionButtonClick={props.handleActionButtonClick} 
                showBalance={props.showBalance} />
        )}
      </tbody>
    </Table>
  );
}
