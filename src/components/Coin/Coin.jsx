import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Td = styled.td`
  border: 1px solid #cccccc;
  width: 25vh;
`;

export default function Coin(props) { 
  const handleClick = (event) => {
    event.preventDefault();
    props.handleRefreshCoinPrice(props.coinID);
  }

  return (
    <tr>
      <Td>{props.name}</Td>
      <Td>{props.ticker}</Td>
      <Td>${props.price.toFixed(4)}</Td>
      {props.showBalance &&
        <Td>{props.balance}</Td>
      }
      <Td>
        <form action="" method="POST">
          <button onClick={handleClick}>Refresh</button>
        </form>
      </Td>
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
