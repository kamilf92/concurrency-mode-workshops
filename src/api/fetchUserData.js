
import { wrapPromise } from './utils';

export function fetchUser() {
  console.log('--- Fetching user ---');

  return new Promise(resolve => {
    setTimeout(() => {
    console.log('--- User fetched ---');
      resolve({
        name: 'Jan',
        surname: 'Nowak',
        postCode: '31-123',
        city: 'Cracow',
        country: 'Poland',
        accountId: '1234 5678 9012 3456',
        email: 'jan.nowak@workshops.pl',
        sex: 'male',
        image: 'https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg'
      });
    }, 1000);
  });
};

export function getUserDetails() {
  const promise = fetchUser();
  //const promise = Promise.reject("Cannot fetch user details");

  return wrapPromise(promise);
};