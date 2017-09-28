import { createStore, combineReducers } from 'redux';

// Expenses reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.value) {
    default:
      return state;
  }
};


// Filters reducer
// text = '', softBy = 'date', startDate = undefined, endDate = undefined

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = ( state = filtersReducerDefaultState, action) => {
  switch (action.value) {
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
  })
);

console.log(store.getState());

const demoState = {
  expenses: [{
    id: 'adlkfjewoi',
    description: 'September Rent',
    note: 'This was the most recent payment',
    amount: 80000,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'date', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};
