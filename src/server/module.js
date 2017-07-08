import { FIZZ_BUZZ } from '../case'

(() => {
  // getting only numbers from arguments of script exec
  const numbers = process.argv
    .filter((arg, index) => {
      arg = !isNaN(parseInt(arg)) ? parseInt(arg) : arg;
      return typeof arg === 'number' && index >= 2;
    });

  FIZZ_BUZZ.numbers = numbers.map(number => parseInt(number, 10));
  // console the fizz buzz numbers and counter
  console.info('The fizz buzz numbers are: %s.\n', FIZZ_BUZZ.numbers.join(' '));
  console.info('See sum for each type: %s', JSON.stringify(FIZZ_BUZZ.count, null, 2));
})();

