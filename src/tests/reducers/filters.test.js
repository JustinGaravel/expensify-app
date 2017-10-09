import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, '@@init');
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  })
});

test('should set sort by to amount', () => {
  const state = filtersReducer(undefined, { type:'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should set sort by to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    type: 'amount'
  };
  const action = { type:'SORT_BY_DATE' };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    type: 'amount'
  };
  const action = {
    type: 'SET_TEXT_FILTER',
    text: 'Sample text!'
  };
  const state = filtersReducer(currentState, action);
  expect(state).toEqual({
    text: 'Sample text!',
    startDate: undefined,
    endDate: undefined,
    type: 'amount'
  });
});

test('should set start date filter', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    type: 'amount'
  };
  const action = {
    type: 'SET_START_DATE',
    startDate: moment(1000)
  };
  const state = filtersReducer(currentState, action);
  expect(state).toEqual({
    text: '',
    startDate: moment(1000),
    endDate: undefined,
    type: 'amount'
  });
});

test('should set end date filter', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    type: 'amount'
  };
  const action = {
    type: 'SET_END_DATE',
    endDate: moment(1000)
  };
  const state = filtersReducer(currentState, action);
  expect(state).toEqual({
    text: '',
    startDate: undefined,
    endDate: moment(1000),
    type: 'amount'
  });
});
