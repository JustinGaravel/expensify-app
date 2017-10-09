import moment from 'moment';

export default [{
  id: '1',
  description: 'gum',
  amount: 200,
  note: '',
  createdAt: 0
}, {
  id: '2',
  description: 'rent',
  amount: 20000,
  note: '',
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'a credit card bill',
  amount: 5000,
  note: '',
  createdAt: moment(0).add(4, 'days').valueOf()
}];
