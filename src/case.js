import {
  _getFizzBuzz,
  isLucky,
  get_intervals_between_numbers,
} from './utils'

export const FIZZ_BUZZ = {
  set numbers(numbers) {
    this.interval = numbers;
  },
  get numbers() {
    return get_intervals_between_numbers(...this.interval)()
      .map(number => isLucky(number) ? 'lucky' : _getFizzBuzz(number));
  },
  get count () {
    const counter = { integers: 0, lucky: 0, fizz: 0, buzz: 0, fizzbuzz: 0 };
    for (const type in counter) {
      if (counter.hasOwnProperty(type)) {
        const isIntegers = type === 'integers';
        counter[type] = this.numbers
          .filter(value => isIntegers ? Number.isInteger(value) : value === type).length;
      }
    }

    return counter;
  },
};

export default FIZZ_BUZZ;
