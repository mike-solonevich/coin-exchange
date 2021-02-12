import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Balance = styled.div`
  min-width: 250px;
  font-size: 2rem;
  margin: 3vh auto;
`;

const Section = styled.section`
  margin: 40px auto 0;
  color: #fff;
  font-size: 1.6rem;
  text-decoration: underline;
`;
const Button = styled.button`
  margin: 0 8px;
`;

const BalanceToggleButton = styled(Button)`
  width: 150px;
`;

var formatter = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

export default function AccountBalance(props) {
  const handleBrr = (event) => {
    event.preventDefault();
    props.addHelicopterMoney();
  }
  const handleClick = (event) => {
    event.preventDefault();
    props.toggleBalanceVisibility();
  }
  const buttonText = props.showBalance ? 'Hide Balance' : 'Show Balance';
  const buttonClass = 'btn ' + (props.showBalance ? 'btn-warning' : 'btn-info');

  return (
    <>
      <Section>
        <BalanceToggleButton onClick={handleClick} className={buttonClass}>{buttonText}</BalanceToggleButton>
        <Button className="btn btn-success" onClick={handleBrr}><i className="fas fa-helicopter"></i></Button>
      </Section>
      <Balance>
        {props.showBalance &&
          <>Your USD balance: {formatter.format(props.amount)}</>
        }
      </Balance>
    </>
  );
}

AccountBalance.propTypes = {
  showBalance: PropTypes.bool.isRequired,
  amount: PropTypes.number.isRequired
}