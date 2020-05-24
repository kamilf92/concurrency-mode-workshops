export const STATUS = {
  PENDING: 'pending',
  SUCCESS: 'success',
  ERROR: 'error'
};

export function wrapPromise(promise) {
  let status = STATUS.PENDING;
  let result;
  const suspender = promise.then(
    r => {
      status = STATUS.SUCCESS;
      result = r;
    },
    e => {
      status = STATUS.ERROR;
      result = e;
    }
  ); 

  return {
    read() {
      switch(status) {
        case STATUS.SUCCESS: 
          return result;
        case STATUS.ERROR:
          throw result;
        default:
          throw suspender
      }
    }
  };
};