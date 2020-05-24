import { wrapPromise } from './utils';

export function fetchFakeItem() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([]);
    }, 3000 * Math.random());
  });
};

export function getFakeItem() {
  const promise = fetchFakeItem();

  return wrapPromise(promise);
};