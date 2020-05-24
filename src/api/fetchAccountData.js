import { wrapPromise } from './utils';

export function fetchAccount({ accountId }) {
  console.log('--- Fetching account info ---');

  if (!accountId) {
    throw new Error("accountId is required");
  }

  return new Promise(resolve => {
    setTimeout(() => {
    console.log('--- Account info fetched ---');
      resolve({
        accountId,
        number: '1234 5678 9876 5432',
        balance: '1020',
        currency: 'PLN'
      });
    }, 1000);
  });
};

export function getAccountDetails({ accountId = null }) {
  const promise = fetchAccount({ accountId });

  return wrapPromise(promise);
};