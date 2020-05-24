import { wrapPromise } from './utils';
import { history } from './history';

export function fetchHistory({ customer }) {
  console.log('--- Fetching user history ---');
  const response = customer ? history.filter(item => item.customer.toLowerCase().includes(customer.toLowerCase())) : history;

  return new Promise(resolve => {
    setTimeout(() => {
    console.log('--- User history fetched ---');
      resolve(response);
    }, 2000);
  });
};

export function getUserHistory({ customer } = {}) {
  const promise = fetchHistory({ customer });

  return wrapPromise(promise);
};