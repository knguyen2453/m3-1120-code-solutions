/* eslint-disable no-unused-vars, no-console */
const takeAChance = require('./take-a-chance');

var promise1 = takeAChance('Kevin');

promise1.then(value => {
  console.log(value);
}, reason => {
  console.error(reason.message);
});
