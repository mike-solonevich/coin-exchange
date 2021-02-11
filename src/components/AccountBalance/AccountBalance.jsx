import React from 'react';
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

export default function AccountBalance(props) {
  const handleClick = (event) => {
    event.preventDefault();
    props.toggleBalanceVisibility();
  }

  const buttonText = props.showBalance ? 'Hide Balance' : 'Show Balance';

  return (
    <Section>
      <Button onClick={handleClick}>{buttonText}</Button>
      {props.showBalance &&
        <>Your USD balance: ${props.amount}</>
      }
    </Section>
  );
}

AccountBalance.propTypes = {
  showBalance: PropTypes.bool.isRequired,
  amount: PropTypes.number.isRequired
}