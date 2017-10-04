import React from 'react';
import { Link } from 'react-router-dom';



// export a stateless functional component
// descr, amount, createdAt

const ExpenseListItem = ({id, description, amount, createdAt}) => (
  <div>
    <Link to={`/edit/${id}`}><h3>{ description }</h3></Link>
    { amount } - { createdAt }
  </div>
);

export default ExpenseListItem;
