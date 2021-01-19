import React, { Component } from 'react';
import Coin from '../Coin/Coin';
import styled from 'styled-components';
const Table = styled.table`
  margin: 50px auto;
  display: inline-block;
  font-size: 1.4rem;
`;

export default class CoinList extends Component {
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {this.props.coinData.map(coin =>
            <Coin key={coin.ticker} name={coin.name} ticker={coin.ticker} price={coin.price} handleRefreshCoinPrice={this.props.handleRefreshCoinPrice} />
          )}
        </tbody>
      </Table>
    );
  }
}
