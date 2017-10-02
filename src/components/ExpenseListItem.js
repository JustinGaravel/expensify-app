import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

// export a stateless functional component
// descr, amount, createdAt

const ExpenseListItem = ({id, description, amount, createdAt, dispatch}) => (
  <div>
    <h3>{ description }</h3>
    { amount } - { createdAt }
    <button onClick={(e) => {
      dispatch(removeExpense({ id }));
    }}>
      Remove
    </button>
  </div>
);

export default connect()(ExpenseListItem);
