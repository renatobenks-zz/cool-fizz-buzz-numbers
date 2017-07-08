import * as fizzBuzz from './fizz-buzz'

const { isFizz, isBuzz, isLucky, _getFizzBuzz, getFizzBuzz } = fizzBuzz;
describe('fizzbuzz', () => {
  describe('_getFizzBuzz() | getFizzBuzz()', () => {
    test('get the fizz return if number is multiple of 3', () => {
      expect(_getFizzBuzz(3)).toBe('fizz');
      expect(_getFizzBuzz(6)).toBe('fizz');
      expect(getFizzBuzz(3)).toBe('fizz');
      expect(getFizzBuzz(6)).toBe('fizz');
    });

    test('get the buzz return if number is multiple of 5', () => {
      expect(_getFizzBuzz(5)).toBe('buzz');
      expect(_getFizzBuzz(10)).toBe('buzz');
      expect(getFizzBuzz(5)).toBe('buzz');
      expect(getFizzBuzz(10)).toBe('buzz');
    });

    test('get the fizzbuzz return if number is multiple of both', () => {
      expect(_getFizzBuzz(15)).toBe('fizzbuzz');
      expect(getFizzBuzz(15)).toBe('fizzbuzz');
    });

    test('get the number if number is not multiple of 3 or 5', () => {
      expect(_getFizzBuzz(1)).toBe(1);
      expect(_getFizzBuzz(2)).toBe(2);
      expect(_getFizzBuzz(11)).toBe(11);
      expect(getFizzBuzz(1)).toBe(1);
      expect(getFizzBuzz(2)).toBe(2);
      expect(getFizzBuzz(11)).toBe(11);
    });
  });

  describe('isBuzz()', () => {
    test('is a buzz number', () => {
      expect(isBuzz(5)).toBeTruthy();
    });

    test('is not a buzz number', () => {
      expect(isBuzz(3)).toBeFalsy();
    });
  });

  describe('isFizz()', () => {
    test('is a fizz number', () => {
      expect(isFizz(3)).toBeTruthy();
    });

    test('is not a fizz number', () => {
      expect(isFizz(5)).toBeFalsy();
    });
  });

  describe('isLucky()', () => {
    test('is a lucky number', () => {
      expect(isLucky(3)).toBeTruthy();
    });

    test('is not a lucky number', () => {
      expect(isLucky(10)).toBeFalsy();
    });
  });
});
