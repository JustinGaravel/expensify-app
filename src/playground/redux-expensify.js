import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = ({
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
const editExpense = ( id, updates ) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// SET_TEXT_FILTER
const setTextFilter = ( text = '' ) => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

// SET_END_DATE
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});


//////////////////////////////////////////////////
// Expenses reducer
//////////////////////////////////////////////////
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      // return state.concat(action.expense);
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter((expense) => expense.id != action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

//////////////////////////////////////////////////
// Filters reducer
//////////////////////////////////////////////////
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = ( state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase());


    // figure out if text filter const is in expense.description
    // use include functionality
    // convert both strings to lower case

    return startDateMatch && endDateMatch && textMatch;
  });
};

//////////////////////////////////////////////////
// Store Creation
//////////////////////////////////////////////////
const store = createStore(
  combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({
  description: 'rent',
  amount: 60000,
  createdAt: 2000
}));

const expenseTwo = store.dispatch(addExpense({
  description: 'starbucks coffee',
  amount: 445,
  createdAt: -2000
}));


// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense( expenseTwo.expense.id, { amount: 800 }));
//
// store.dispatch(setTextFilter('RENT'));
// store.dispatch(setTextFilter());
//
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
//
store.dispatch(setStartDate(-10025));
// store.dispatch(setStartDate());
//
store.dispatch(setEndDate(0));

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
