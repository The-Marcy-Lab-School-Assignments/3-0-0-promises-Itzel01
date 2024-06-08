const resolvedWrapper = (value) => {
  // return new Promise((resolve, reject) => {
  //   return resolve(value);
  // })
  return Promise.resolve(value);
};

const rejectedWrapper = (message) => {
  return new Promise((resolve, reject) => {
    return reject(new Error(message));
  })
};

const handleResolvedPromise = (promise) => {
  return promise.then(val => {
    console.log(val)
    return val;
  })
};

const handleResolvedOrRejectedPromise = (promise) => {
  return promise.then(val => {
    console.log(val)
    return val;
  }).catch(err => {
    console.error(`Your error message was: ${err.message}`);
    return null;
  })
};

const pauseForMs = (ms) => {
  return new Promise((resolve, reject) => {
    return setTimeout(resolve, ms)
  });
};

module.exports = {
  resolvedWrapper,
  rejectedWrapper,
  handleResolvedPromise,
  handleResolvedOrRejectedPromise,
  pauseForMs,
};
