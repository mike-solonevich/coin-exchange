import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
  margin: 40px auto 0;
  color: #fff;
  font-size: 1.6rem;
  text-decoration: underline;
`;

export default class AccountBalance extends Component {
  render() {
    return (
      <Section>
        Your USD balance: ${this.props.amount}
      </Section>
    );
  }
}

AccountBalance.propTypes = {
  amount: PropTypes.number.isRequired
}