import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
  margin: 40px auto 0;
  color: #fff;
  font-size: 1.6rem;
  text-decoration: underline;
`;
const Button = styled.button`
  display: block;
  margin: 0 auto 20px auto;
`;

export default class AccountBalance extends Component {
  handleClick = (event) => {
    event.preventDefault();
    this.props.toggleBalanceVisibility();
  }

  render() {
    const buttonText = this.props.showBalance ? 'Hide Balance' : 'Show Balance';
    return (
      <Section>
        <Button onClick={this.handleClick}>{buttonText}</Button>
        {this.props.showBalance &&
          <>Your USD balance: ${this.props.amount}</>
        }
      </Section>
    );
  }
}

AccountBalance.propTypes = {
  showBalance: PropTypes.bool.isRequired,
  amount: PropTypes.number.isRequired
}