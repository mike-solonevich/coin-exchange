import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components'

const CoinHeader = styled.header`
  background-color: #282c34;
  min-height: 20vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  color: white;
`;
const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Img = styled.img`
  height: 8rem;
  pointer-events: none;
  animation: ${logoSpin} infinite 20s linear;
`;
const H1 = styled.h1`
  font-size: 4rem;
`;

export default class Header extends Component {
  render() {
    return (
      <header>
        <CoinHeader>
          <Img src={this.props.logo} alt="logo" />
          <H1>
            Coin Exchange
          </H1>
        </CoinHeader>
      </header>
    )
  }
}
