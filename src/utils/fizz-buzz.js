import { get_digits_number } from './utils'

// getting if is fizz or buzz number or instead is a lucky
export const isFizz = number => number % 3 === 0;
export const isBuzz = number => number % 5 === 0;
export const isLucky = (number) => get_digits_number(number).includes('3');

export function _getFizzBuzz (number) {
  return ((fizz, buzz) => fizz || buzz ? ((f, b) => f && b ? f+b : f || b)(fizz && 'fizz', buzz && 'buzz') : number)(isFizz(number), isBuzz(number));
}

export function getFizzBuzz(number) {
  const fizz = isFizz(number) && 'fizz';
  const buzz = isBuzz(number) && 'buzz';
  return fizz && buzz && fizz + buzz || fizz || buzz || number;
}

export default _getFizzBuzz;
