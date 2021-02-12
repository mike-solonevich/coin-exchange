import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Td = styled.td`
  border: 1px solid #cccccc;
  width: 20vh;
`;
const TdControls = styled(Td)`
  width: 25vw;
`;
const Button = styled.button`
  font-size: 18px;
  width: 200px;
  margin: 3px 5px;
`;

export default function Coin(props) { 
  const handleRefresh = (event) => {
    event.preventDefault();
    props.handleActionButtonClick(props.coinID, 'refresh');
  }
  const handleBuy = (event) => {
    event.preventDefault();
    props.handleActionButtonClick(props.coinID, 'buy');
  }
  const handleSell = (event) => {
    event.preventDefault();
    props.handleActionButtonClick(props.coinID, 'sell');
  }

  return (
    <tr>
      <Td>{props.name}</Td>
      <Td>{props.ticker}</Td>
      <Td>${props.price.toFixed(4)}</Td>
      {props.showBalance &&
        <Td>{props.balance}</Td>
      }
      <TdControls>
        <form action="" method="POST">
          <Button onClick={handleRefresh} className="btn btn-info">Refresh</Button>
          <Button onClick={handleBuy} className="btn btn-warning">Buy</Button>
          <Button onClick={handleSell} className="btn btn-danger">Sell</Button>
        </form>
      </TdControls>
    </tr>
  );
}

Coin.propTypes = {
  name: PropTypes.string.isRequired,
  coinID: PropTypes.string.isRequired,
  ticker: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired
}
